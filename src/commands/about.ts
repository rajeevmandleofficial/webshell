import command from '../../config.json' assert {type: 'json'};

const createAbout = () : string[] => {
  const about : string[] = [];

  const SPACE = "&nbsp;";

  const EMAIL = "Email";
  const GITHUB = "Github";
  const LINKEDIN = "Linkedin";
  
  const email = `<i class='fa-solid fa-envelope'></i> ${EMAIL}`;   
  const github = `<i class='fa-brands fa-github'></i> ${GITHUB}`;
  const linkedin = `<i class='fa-brands fa-linkedin'></i> ${LINKEDIN}`;
  let string = "";

  about.push("<br>");
  about.push(command.aboutGreeting);
  about.push("<br>");
  if (command.social.email && command.social.email.trim() !== "") {
    string += SPACE.repeat(2);
    string += email;
    string += SPACE.repeat(17 - EMAIL.length);
    string += `<a target='_blank' href='mailto:${command.social.email}'>${command.social.email}</a>`;
    about.push(string);
  }

  if (command.social.github && command.social.github.trim() !== "") {
    string = '';
    string += SPACE.repeat(2);
    string += github;
    string += SPACE.repeat(17 - GITHUB.length);
    const githubHandle = command.social.github.replace(/^https?:\/\/(www\.)?github\.com\/?/, '').replace(/\/$/, '');
    string += `<a target='_blank' href='https://github.com/${githubHandle}'>github/${githubHandle}</a>`;
    about.push(string);
  }

  if (command.social.linkedin && command.social.linkedin.trim() !== "") {
    string = '';
    string += SPACE.repeat(2);
    string += linkedin;
    string += SPACE.repeat(17 - LINKEDIN.length);  
    const linkedinHandle = command.social.linkedin.replace(/^https?:\/\/(www\.)?linkedin\.com\/in\/?/, '').replace(/\/$/, '');
    string += `<a target='_blank' href='https://www.linkedin.com/in/${linkedinHandle}'>linkedin/${linkedinHandle}</a>`;
    about.push(string);
  }

  about.push("<br>");
  return about
}

export const ABOUT = createAbout();
