import { createI18n } from 'vue-i18n';

const messages = {
	en: {
		home: {
			line1: 'Hey there! My name is',
			button1: 'Know more',
			button2: 'Download my CV'
		},
		typedMessages: {
			before: "I'm a",
			0: 'Computer scientist and engineer',
			1: 'Web developer',
			2: 'App developer',
			3: 'Data analyst',
			4: 'Sofware developer'
		},
		aboutMe: {
			title: 'About me',
			p1: 'Graduated in Computer Science and Engineering from the Carlos III University of Madrid. I consider an open and sociable person, with a great passion for technology and eager to learn new knowledge and live new experiences.',
			p2: 'I have extensive experience in developing applications, especially with the use of web programming languages and technologies. I also have a certain knowledge base of a multitude of languages and tools, which you can see below.'
		},
		projects: {
			title: 'My projects',
			subtitle: 'Projects I have worked on or am currently working on',
			projects: {
				knowMore: 'Saber mas',
				0: {
					title: 'Monekin',
					description:
						'An application whose objective is to help control our expenses and improve the individual economy of each person. Safe, beautiful, cloud-based and with dozens of stats and possibilities.',
					link: 'https://play.google.com/store/apps/details?id=com.monekin.app'
				},
				1: {
					title: 'SnackScan',
					description:
						'A free, ad-free tool that makes it easy to scan food products. With SnackScan you can analyze more than 1 million products, thanks to an open and free database, managed by all and created by Open Food Facts.',
					link: 'https://play.google.com/store/apps/details?id=com.snackscan.app'
				}
			}
		},
		qualification: {
			title: 'Qualification',
			subtitle: 'My personal journey',
			jobs: {
				title: 'Job experience',
				0: {
					title: 'Front-End Developer',
					site: 'Satec',
					web: 'https://www.satec.es/en/',
					webPlaceholder: 'Go to site',
					years: '2021-2023',
					description:
						'Development of the HealthPoint health platform and the Castilla la Mancha Health Card application, both with the Angular framework. Use of other Front-end frameworks such as Vue and React.'
				},
				1: {
					title: 'IT Support and Development Intern',
					site: 'IMDEA Networks',
					web: 'https://networks.imdea.org/',
					webPlaceholder: 'Go to site',
					years: '2021',
					description:
						'Maintenance of various services and applications in NodeJS, JavaScript, Express and other web development languages and frameworks. Management of databases such as PostgreSQL. Planning and development of a web application for hiring employees in Laravel. Other support tasks.'
				},
				2: {
					title: 'Volunteer',
					site: 'T3chfest',
					web: 'https://t3chfest.es/',
					webPlaceholder: 'Go to site',
					years: '2019',
					description: 'Volunteer at T3chfest, the Computer Science and new technology fair at Carlos III University of Madrid'
				}
			},

			education: {
				title: 'Education',
				0: {
					title: 'Bachelor in Computer Science and Engineering',
					site: 'University Carlos III of Madrid',
					web: 'https://www.uc3m.es/inicio',
					webPlaceholder: 'Go to site',
					years: '2017-2021',
					description:
						'Throughout this study plan I acquired knowledge in the most diverse fields of computer science: software development, artificial intelligence, databases, user interfaces, neural networks, algebra, heuristics, cybersecurity, machine language ...'
				},
				1: {
					title: 'Computer science',
					site: 'Politechnika Warszawska',
					web: 'https://www.pw.edu.pl/',
					webPlaceholder: 'Go to site',
					years: '2019-2020',
					description:
						'In the months of my Erasmus I learned to fend for myself in a country very different from mine. I also acquired knowledge through an educational environment other than Spanish, more oriented to practice.'
				}
			}
		},
		skills: {
			title: 'Skills and tools',
			subtitle: 'All the tools that I know how to manage, click on each of the bubbles to learn more about them'
		},
		contact: {
			title: 'Contact',
			subtitle: 'Get in touch',
			text: 'If you like what you’ve seen on my site, I’d love for you to get in touch via my contact form or social media!',
			links: {
				email: 'Send me an email',
				linkedin: 'Connect with me',
				github: 'See my projects'
			},
			sendMailButton: 'Send mail'
		}
	},
	es: {
		home: {
			line1: 'Hola! Mi nombre es',
			button1: 'Saber más',
			button2: 'Descarga mi CV'
		},
		typedMessages: {
			before: 'Soy',
			0: 'Ingeniero informático',
			1: 'Desarrollador web',
			2: 'Desarrollador de apps',
			3: 'Analista de datos',
			4: 'Desarrollador de software'
		},
		aboutMe: {
			title: 'Sobre mi',
			p1: 'Licenciado en Ingeniería Informatica. Me considero una persona abierta y sociable, con una gran pasión por la tecnología y con muchas ganas de aprender nuevos conocimientos y vivir nuevas experiencias.',
			p2: 'Cuento con una amplia experiencia en el desarrollo de aplicaciones, especialmente con el uso de lenguajes y tecnologías de programación web. También tengo cierta base de conocimientos de una multitud de lenguajes y herramientas, que puede ver a continuación.'
		},
		projects: {
			title: 'Mis projectos',
			subtitle: 'Proyectos en los que he trabajado o estoy trabajando',
			projects: {
				knowMore: 'Saber mas',
				0: {
					title: 'Monekin',
					description:
						'Una aplicación cuyo objetivo es ayudar a controlar nuestros gastos y mejorar la economía individual de cada persona. Seguro, hermoso, basado en la nube y con docenas de estadísticas y posibilidades.',
					link: 'https://play.google.com/store/apps/details?id=com.monekin.app'
				},
				1: {
					title: 'SnackScan',
					description:
						'Una herramienta gratuita y sin publicidad que facilita el escaneo de productos alimenticios. Con SnackScan puedes analizar más de 1 millón de productos, gracias a una base de datos abierta y gratuita, gestionada por todos y creada por Open Food Facts.',
					link: 'https://play.google.com/store/apps/details?id=com.snackscan.app'
				}
			}
		},
		qualification: {
			title: 'Calificación',
			subtitle: 'Mi viaje personal',
			jobs: {
				title: 'Experiencia laboral',
				0: {
					title: 'Desarrollador front-end',
					site: 'Satec',
					web: 'https://www.satec.es/es/',
					webPlaceholder: 'Ir al sitio',
					years: '2021-2023',
					description:
						'Desarrollo de la plataforma de salud HealthPoint y la aplicación Tarjeta Sanitaria de Castilla la Mancha, ambas con el framework Angular. Uso de otros frameworks front-end como Vue y React.'
				},
				1: {
					title: 'Beca de soporte IT y desarrollo',
					site: 'IMDEA Networks',
					web: 'https://networks.imdea.org/',
					webPlaceholder: 'Ir al sitio',
					years: '2021',
					description:
						'Mantenimiento de diversos servicios y aplicaciones en NodeJS, JavaScript, Express y otros lenguajes y frameworks de desarrollo web. Manejo de bases de datos como PostgreSQL. Planificación y desarrollo de una aplicación web para la contratación de empleados en Laravel. Otras tareas de apoyo.'
				},
				2: {
					title: 'Voluntario',
					site: 'T3chfest',
					web: 'https://t3chfest.es/',
					webPlaceholder: 'Ir al sitio',
					years: '2019',
					description: 'Voluntariado en T3chfest, la feria de Informática y Nuevas Tecnologías de la Universidad Carlos III de Madrid'
				}
			},

			education: {
				title: 'Educación',
				0: {
					title: 'Grado en Ingeniería Informática',
					site: 'Universidad Carlos III de Madrid',
					web: 'https://www.uc3m.es/inicio',
					webPlaceholder: 'Ir al sitio',
					years: '2017-2021',
					description:
						'A lo largo de este plan de estudios adquirí conocimientos en los más diversos campos de la informática: desarrollo de software, inteligencia artificial, bases de datos, interfaces de usuario, redes neuronales, álgebra, heurística, ciberseguridad, lenguaje ensamblador ...'
				},
				1: {
					title: 'Computer science',
					site: 'Politechnika Warszawska',
					web: 'https://www.pw.edu.pl/',
					webPlaceholder: 'Ir al sitio',
					years: '2019-2020',
					description:
						'En los meses de mi Erasmus aprendí a valerme por mí mismo en un país muy diferente al mío. También adquirí conocimientos a través de un entorno educativo diferente al español, más orientado a la práctica.'
				}
			}
		},
		skills: {
			title: 'Conocimientos y herramientas',
			subtitle: 'Todas las herramientas que sé manejar, haz clic en cada una de las burbujas para conocer más sobre ellas'
		},
		contact: {
			title: 'Contacto',
			subtitle: 'Contacta conmigo',
			text: 'Si te ha gustado lo que has visto en mi sitio, ¡me encantaría que te contactes a través de mi formulario de contacto o de las redes sociales!',
			links: {
				email: 'Envíame un correo electrónico',
				linkedin: 'Conecta conmigo',
				github: 'Ver mis proyectos'
			},
			sendMailButton: 'Enviar correo'
		}
	}
};

const avalaibleLocales = ['es', 'en'];
const fallbackLocale = 'en';
const initialLang = avalaibleLocales.find((x) => x == navigator.language.split('-')[0]) ?? fallbackLocale;

const i18n = createI18n({
	legacy: false,
	locale: initialLang,
	fallbackLocale: fallbackLocale,
	messages
});

export default i18n;
