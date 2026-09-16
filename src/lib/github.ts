export interface Repository {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
}

interface GitHubRepoResponse extends Repository {
  fork: boolean;
  archived: boolean;
}

export async function getRepositories(): Promise<Repository[]> {
  try {
    const headers: Record<string, string> = {
      'User-Agent': 'ilhamjkid-portfolio',
    };

    const token = import.meta.env.GITHUB_TOKEN;
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const response = await fetch(
      'https://api.github.com/users/ilhamjkid/repos?sort=updated&per_page=100',
      { headers }
    );

    if (!response.ok) {
      console.warn(
        `Failed to fetch GitHub repositories: ${response.status} ${response.statusText}`
      );
      return [];
    }

    const repos: GitHubRepoResponse[] = await response.json();

    return repos.filter(
      (repo) =>
        !repo.fork &&
        !repo.archived &&
        Boolean(repo.description && repo.description.trim() !== '')
    );
  } catch (error) {
    console.warn('Error fetching GitHub repositories:', error);
    return [];
  }
}
