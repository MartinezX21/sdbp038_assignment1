function Project(category, name, description, link) {
    this.category = category;
    this.name = name;
    this.description = description;
    this.link = link;
}

function ProjectImage(path, description) {
    this.path = path;
    this.description = description;
}

Project.prototype.setImage = function(imagePath, description) {
    this.image = new ProjectImage(imagePath, description);
}

Project.prototype.createProjectCard = function() {
    const projectCard = document.createElement('div');
    projectCard.classList.add('card');
    //
    // Create the image element
    const img = document.createElement('img');
    img.src = this.image.path;
    img.alt = this.image.description;
    img.classList.add('card-image');
    // wrap the image in a div for styling
    const imgWrapper = document.createElement('div');
    imgWrapper.classList.add('card-image-container');
    imgWrapper.appendChild(img);
    projectCard.appendChild(imgWrapper);
    //
    // Create the content container
    const content = document.createElement('div');
    content.classList.add('card-content');
    projectCard.appendChild(content);
    //
    // Create the category element
    const category = document.createElement('p');
    category.classList.add('text-gray', 'text-xs');
    category.textContent = this.category;
    content.appendChild(category);
    //
    // Create the name element
    const name = document.createElement('h3');
    name.classList.add('card-title');
    name.textContent = this.name;
    content.appendChild(name);
    //
    // Create the description element
    const description = document.createElement('p');
    description.classList.add('card-description');
    description.textContent = this.description;
    content.appendChild(description);
    //
    // Create the link element
    const link = document.createElement('a');
    link.classList.add('card-button');
    link.href = this.link;
    link.textContent = 'View Project';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.innerHTML += ' <i class="fa-solid fa-arrow-right"></i>';
    // wrap the link in a div for styling
    const linkWrapper = document.createElement('div');
    linkWrapper.classList.add('w-full');
    linkWrapper.appendChild(link);
    content.appendChild(linkWrapper);

    return projectCard;
};