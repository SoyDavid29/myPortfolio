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
description: `OurSpace started as a simple idea: show up professionally, stay human. 
It's my personal brand where creativity meets real work.
`, 
link: 'https://www.ourspacesite.com'  
},
{
id: 2, 
img:  'img/berel.png', 
tittle: 'Pinturas Berel', 
description: `A collaborative project where I got to contribute new features and fresh styles to a shared design system — 
putting my university background to work in a real team environment.`, 
link: 'https://www.berel.com'  
},
{
id: 3, 
img: 'img/fundacion.png', 
tittle: 'Fundación MGAS', 
description: 'Some projects you do for the experience. This one I did because it mattered. Working with Fundacion MGAS for my social service was a reminder of why design can be so powerful when it serves a real cause.', 
link: 'https://fundacionmgas.org.mx/'  
},

];

export default ProjectsDb;