/**
 * Name - The name of the project
 * Author - The GitHub username of the project author/organization
 * Description - The description of the project
 * Open Source - If the project is open source or not
 * Live URL - The URL of a live version of the project or link to download it
 * Image URL - The URL of the image to use. Should be a 1:1 ratio image at least 128px by 128px (Optional)
 * Repository URL - The URL of the project repository (Optional)
 */
interface Project {
  name: string;
  author: string;
  description: string;
  open_source: boolean;
  live_url: string;
  image_url?: string;
  repository_url?: string;
}

/**
 * To add your project to this list, create a pull request off of the master branch with your project's details.
 * Make sure to match the type listed above and the prettier formatting or your PR will be declined. We reserve the right to not showcase
 * any project for any reason without giving an explanation.
 */
const projects: Project[] = [
  {
    name: "Discord UI Toolkit docs",
    author: "DavidShefcik",
    description: "The documentation site for Discord UI Toolkit.",
    open_source: true,
    live_url: "https://discord-ui-toolkit.github.io",
    repository_url: "https://github.com/DavidShefcik/discord-ui-toolkit-docs"
  }
];

export { Project, projects };