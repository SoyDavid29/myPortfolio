export interface Project {
    id: number;
    img: string;
    tittle: string;
    description: string;
    link: string;
}

const ProjectsDb: Project[] = [

{
id: 1, 
img: 'img/ourspace.png', 
tittle: 'OurSpace', 
description: `This is my personal brand called OurSpace 
a website for show my work as front-end developer and 
UX/UI Designer`, 
link: 'https://www.ourspacesite.com'  
},
{
id: 2, 
img:  'img/berel.png', 
tittle: 'Pinturas Berel', 
description: `E-commerce platform. I colaborated to mantein and add new features to this Website`, 
link: 'https://www.berel.com'  
},
{
id: 3, 
img: 'img/fundacion.png', 
tittle: 'Fundación MGAS', 
description: 'A proyect of my Social Service, this website is a landing page where it shows informaction of this fundation', 
link: 'https://fundacionmgas.org.mx/'  
},

];

export default ProjectsDb;