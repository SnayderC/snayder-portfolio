import type { Project } from '../types/project'

export const projects: Project[] = [
  {
    id: 'techcheckpro', slug: 'techcheckpro', title: 'TechCheckPro',
    shortDescription: 'Plataforma Full Stack que digitaliza la evaluación para la adopción de software FLOSS mediante el método GUIOS.',
    fullDescription: 'Centraliza auditorías, valoraciones de factores, análisis FODA y la obtención de un dictamen automatizado.',
    role: 'Desarrollo Full Stack', type: 'individual', status: 'deployed', featured: true,
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Django REST Framework', 'PostgreSQL', 'JWT', 'Docker', 'Vercel', 'Neon PostgreSQL'],
    problem: 'La evaluación de adopción de software FLOSS mediante GUIOS requiere organizar múltiples factores, ponderaciones y cálculos metodológicos.',
    solution: 'Una plataforma web que almacena evaluaciones, automatiza cálculos GUIOSAD, genera matrices FODA y produce un dictamen final.',
    responsibilities: ['Diseño de la arquitectura Full Stack.', 'Desarrollo de la interfaz con React.', 'Implementación de la API con Django REST Framework.', 'Configuración de autenticación JWT y modelado en PostgreSQL.', 'Integración del despliegue en Vercel.'],
    features: ['Gestión de auditorías FLOSS.', 'Matriz TOE y evaluación de factores.', 'Autoguardado y análisis FODA.', 'Dictamen automatizado, comparaciones y simulación What-If.', 'Reportes PDF y roles de usuario.'],
    decisions: [], challenges: [], learnings: [], improvements: [],
    repositoryUrl: 'https://github.com/SnayderC/TechCheckPro',
    demoUrl: 'https://techcheck-pro.vercel.app',
    screenshots: [{ src: '/images/projects/techcheckpro/dashboard.jpg', alt: 'Panel de control de TechCheckPro con gestión de auditorías FLOSS', width: 1600, height: 785 }],
  },
  {
    id: 'techpoint-pos', slug: 'techpoint-pos', title: 'TechPoint-POS',
    shortDescription: 'Sistema POS Full Stack para administrar ventas, productos, inventario, clientes, créditos, abonos y reportes empresariales.',
    fullDescription: 'Proyecto con código e historial migrados, actualmente en preparación para una demo.',
    role: 'Desarrollo Full Stack', type: 'individual', status: 'demo-preparation', featured: true,
    technologies: ['React', 'Django REST Framework', 'PostgreSQL', 'JWT', 'Docker', 'Tailwind CSS'],
    problem: '', solution: '', responsibilities: [], features: [], decisions: [], challenges: [], learnings: [], improvements: [],
    repositoryUrl: 'https://github.com/SnayderC/TechPoint-POS',
    screenshots: [{ src: '/images/projects/techpoint-pos/pos-dashboard.jpeg', alt: 'Interfaz de ventas y catálogo de TechPoint-POS', width: 1080, height: 523 }],
  },
  {
    id: 'ai-routine-planner', slug: 'ai-routine-planner', title: 'AI Routine Planner',
    shortDescription: 'Aplicación colaborativa para organizar rutinas y tareas mediante planificación e integración de inteligencia artificial.',
    fullDescription: 'Proyecto colaborativo con código, ramas e historial migrados.',
    role: 'Participación en desarrollo e integración de funcionalidades', type: 'collaborative', status: 'in-progress', featured: true,
    technologies: ['Python', 'Django', 'PostgreSQL', 'Inteligencia artificial', 'Git', 'GitHub'],
    problem: '', solution: '',
    responsibilities: ['Participación en el desarrollo e integración de funcionalidades.', 'Trabajo colaborativo mediante ramas de Git.', 'Construcción de componentes de planificación de rutinas y uso de inteligencia artificial.'],
    features: [], decisions: [], challenges: [], learnings: [], improvements: [],
    repositoryUrl: 'https://github.com/SnayderC/AI-Routine-Planner', screenshots: [],
  },
]

export const projectBySlug = new Map(projects.map((project) => [project.slug, project]))
