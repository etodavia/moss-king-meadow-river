import { i as __toESM } from "../_runtime.mjs";
import { L as require_react, v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as ChevronLeft, n as Maximize2, r as ChevronRight } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-NpR1oHO3.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var SLIDES = [
	{
		kind: "cover",
		kicker: "Aula prática",
		title: "Seu site\ncom IA",
		subtitle: "Da estrutura certa à publicação profissional",
		line: "Planeje  ·  Crie  ·  Configure  ·  Publique",
		note: "Uma apresentação visual para transformar conhecimento em ação.",
		brand: "e-todavia  ·  Kelly Coutinho",
		bg: "/deck/cover-bg.png"
	},
	{
		kind: "journey",
		kicker: "A jornada",
		title: "Um site forte não nasce de uma tela bonita.",
		body: "Ele nasce de uma estrutura clara, uma mensagem objetiva e uma configuração profissional.",
		steps: [
			{
				n: "01",
				t: "Estrutura",
				d: "Organizar antes de decorar"
			},
			{
				n: "02",
				t: "Experiência",
				d: "Guiar o visitante para a próxima ação"
			},
			{
				n: "03",
				t: "Conversão",
				d: "Construir confiança em cada seção"
			},
			{
				n: "04",
				t: "Resultado",
				d: "Publicar com segurança e autonomia"
			}
		],
		quote: "“Bora organizar?”",
		rule: "A regra: cada bloco responde uma pergunta do visitante.",
		qs: "“Onde estou?”  ·  “Isso é para mim?”  ·  “Como funciona?”  ·  “Posso confiar?”  ·  “O que faço agora?”"
	},
	{
		kind: "map",
		kicker: "Mapa do site",
		title: "A arquitetura que conduz o visitante",
		body: "A ordem cria uma narrativa: atenção → clareza → confiança → ação.",
		items: [
			"Header",
			"Hero",
			"Sobre",
			"Serviços",
			"Benefícios",
			"Depoimentos",
			"Contato",
			"FAQ",
			"Footer"
		]
	},
	{
		kind: "guide",
		kicker: "Seção 01",
		title: "Header: orientação em poucos segundos",
		body: "Logo, navegação, busca e CTA precisam estar visíveis sem competir entre si.",
		image: "/deck/header.png",
		observe: [
			{
				n: "01",
				t: "Marca reconhecível"
			},
			{
				n: "02",
				t: "Menu enxuto"
			},
			{
				n: "03",
				t: "CTA prioritário"
			},
			{
				n: "04",
				t: "Mobile simplificado"
			}
		]
	},
	{
		kind: "guide",
		kicker: "Seção 02",
		title: "Hero: a promessa principal",
		body: "É a primeira dobra. Precisa dizer o que você faz, para quem e qual o próximo passo.",
		image: "/deck/hero.png",
		observe: [
			{
				n: "01",
				t: "Título de impacto"
			},
			{
				n: "02",
				t: "Subtítulo claro"
			},
			{
				n: "03",
				t: "CTA destacado"
			},
			{
				n: "04",
				t: "Visual que conecta"
			}
		]
	},
	{
		kind: "guide",
		kicker: "Seção 03",
		title: "Sobre: problema + solução + contexto",
		body: "Apresente a empresa pelo valor que ela gera — não apenas pela própria história.",
		image: "/deck/sobre.png",
		observe: [
			{
				n: "01",
				t: "Problema do público"
			},
			{
				n: "02",
				t: "Solução objetiva"
			},
			{
				n: "03",
				t: "Benefícios visíveis"
			},
			{
				n: "04",
				t: "Imagem humana"
			}
		]
	},
	{
		kind: "guide",
		kicker: "Seção 04",
		title: "Serviços: transforme oferta em escolha",
		body: "Cards organizados ajudam o visitante a entender rapidamente o que você entrega.",
		image: "/deck/servicos.png",
		observe: [
			{
				n: "01",
				t: "Categorias claras"
			},
			{
				n: "02",
				t: "Textos curtos"
			},
			{
				n: "03",
				t: "Hierarquia visual"
			},
			{
				n: "04",
				t: "Link de ação"
			}
		]
	},
	{
		kind: "guide",
		kicker: "Seção 05",
		title: "Benefícios: por que escolher você?",
		body: "Diferenciais concretos reduzem objeções e aumentam a percepção de valor.",
		image: "/deck/beneficios.png",
		observe: [
			{
				n: "01",
				t: "Valor percebido"
			},
			{
				n: "02",
				t: "Diferenciais reais"
			},
			{
				n: "03",
				t: "Prova por números"
			},
			{
				n: "04",
				t: "Consistência visual"
			}
		]
	},
	{
		kind: "guide",
		kicker: "Seção 06",
		title: "Depoimentos: confiança por prova social",
		body: "Resultados e histórias reais ajudam o visitante a se enxergar como próximo caso de sucesso.",
		image: "/deck/depoimentos.png",
		observe: [
			{
				n: "01",
				t: "Depoimento específico"
			},
			{
				n: "02",
				t: "Nome e contexto"
			},
			{
				n: "03",
				t: "Indicadores reais"
			},
			{
				n: "04",
				t: "Formato escaneável"
			}
		]
	},
	{
		kind: "full",
		kicker: "Seção 07",
		title: "Contato: reduza a distância até a conversa",
		body: "Ofereça canais diretos e um formulário simples. O visitante escolhe como quer falar com você.",
		image: "/deck/contato.png"
	},
	{
		kind: "guide",
		kicker: "Seção 08",
		title: "FAQ: responda antes que a dúvida vire abandono",
		body: "Perguntas frequentes reduzem atrito, esclarecem objeções e melhoram a decisão.",
		image: "/deck/faq.png",
		observe: [
			{
				n: "01",
				t: "Dúvidas reais"
			},
			{
				n: "02",
				t: "Respostas objetivas"
			},
			{
				n: "03",
				t: "Busca opcional"
			},
			{
				n: "04",
				t: "Accordion no mobile"
			}
		]
	},
	{
		kind: "guide",
		kicker: "Seção 09",
		title: "Footer: termine o site sem terminar a navegação",
		body: "O rodapé reúne atalhos, contatos, redes sociais e informações legais.",
		image: "/deck/footer.png",
		observe: [
			{
				n: "01",
				t: "Links essenciais"
			},
			{
				n: "02",
				t: "Contato completo"
			},
			{
				n: "03",
				t: "Redes sociais"
			},
			{
				n: "04",
				t: "Privacidade e cookies"
			}
		]
	},
	{
		kind: "full",
		kicker: "IA na prática",
		title: "Como conversar com a IA para construir melhor",
		body: "Quanto melhor o briefing, melhor a primeira versão — e mais inteligente fica o refinamento.",
		image: "/deck/ia.png"
	},
	{
		kind: "prompts",
		kicker: "Prompt que funciona",
		title: "O briefing em 8 blocos",
		items: [
			{
				n: "01",
				t: "Objetivo",
				d: "Explique o que você quer fazer."
			},
			{
				n: "02",
				t: "Público",
				d: "Diga para quem é o site."
			},
			{
				n: "03",
				t: "Estrutura",
				d: "Liste as seções necessárias."
			},
			{
				n: "04",
				t: "Estilo visual",
				d: "Cores, tom e referências."
			},
			{
				n: "05",
				t: "Funcionalidades",
				d: "Formulário, WhatsApp, blog, SEO."
			},
			{
				n: "06",
				t: "Referências",
				d: "Mostre sites que você gosta."
			},
			{
				n: "07",
				t: "Ajustes",
				d: "Revise e refine a primeira versão."
			},
			{
				n: "08",
				t: "Otimizações",
				d: "Velocidade, SEO e responsivo."
			}
		]
	},
	{
		kind: "full",
		kicker: "Ferramentas",
		title: "A mesma ideia. Mais possibilidades.",
		image: "/deck/ferramentas.png"
	},
	{
		kind: "full",
		kicker: "Publicação",
		title: "Configurações que não podem faltar",
		image: "/deck/checklist.png"
	},
	{
		kind: "full",
		kicker: "Formulários",
		title: "E-mail profissional e SMTP",
		image: "/deck/email.png"
	},
	{
		kind: "flow",
		kicker: "Execução",
		title: "Do briefing ao site publicado",
		body: "Um fluxo simples para não se perder entre design, código, conteúdo e configuração.",
		items: [
			{
				n: "01",
				t: "Briefing",
				d: "Objetivo, público e referências"
			},
			{
				n: "02",
				t: "Estrutura",
				d: "Seções e hierarquia"
			},
			{
				n: "03",
				t: "Criação",
				d: "Layout + conteúdo + código"
			},
			{
				n: "04",
				t: "Refino",
				d: "Responsivo, velocidade e UX"
			},
			{
				n: "05",
				t: "Configuração",
				d: "Domínio, SMTP, LGPD e SEO"
			},
			{
				n: "06",
				t: "Publicação",
				d: "Testes e entrada no ar"
			}
		]
	},
	{
		kind: "full",
		kicker: "Hora de ver",
		title: "Na prática",
		image: "/deck/pratica.png"
	},
	{
		kind: "close",
		image: "/deck/close.png"
	}
];
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function Chip({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "inline-flex rounded-sm bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-fg",
		children
	});
}
function Cover({ s, dir }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative h-full overflow-hidden bg-bg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: s.bg,
				alt: "",
				className: "cover-zoom absolute inset-0 h-full w-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-bg/50" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("relative z-10 flex h-full flex-col justify-between px-8 py-10 sm:px-14 sm:py-12", dir >= 0 ? "deck-enter-right" : "deck-enter-left"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, { children: s.kicker }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-display text-5xl font-extrabold leading-[0.95] tracking-tight text-fg whitespace-pre-line sm:text-7xl",
							children: s.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-xl text-lg text-fg/90 sm:text-xl",
							children: s.subtitle
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-muted",
							children: s.line
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted",
							children: s.note
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-fg/80",
							children: s.brand
						})]
					})
				]
			})
		]
	});
}
function Journey({ s }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col bg-bg px-6 py-8 sm:px-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, { children: s.kicker }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "deck-enter mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl",
				children: s.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "deck-enter mt-2 max-w-3xl text-muted",
				children: s.body
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "stagger mt-6 grid flex-1 grid-cols-2 gap-3 lg:grid-cols-4",
				children: s.steps.map((st) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "flex flex-col rounded-lg bg-card p-4 ring-1 ring-line sm:p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-bold text-primary",
							children: st.n
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-3 font-display text-lg font-semibold uppercase",
							children: st.t
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: st.d
						})
					]
				}, st.n))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "deck-enter mt-5 font-display text-xl italic text-primary-soft",
				children: s.quote
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-fg",
				children: s.rule
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-xs text-muted sm:text-sm",
				children: s.qs
			})
		]
	});
}
function MapSlide({ s }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col bg-bg px-6 py-8 sm:px-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, { children: s.kicker }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "deck-enter mt-4 font-display text-3xl font-bold sm:text-4xl",
				children: s.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-muted",
				children: s.body
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "stagger mt-6 grid flex-1 grid-cols-2 gap-3 sm:grid-cols-3",
				children: s.items.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-lg bg-card p-5 ring-1 ring-line",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-bold text-primary",
						children: String(i + 1).padStart(2, "0")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-3 font-display text-xl font-semibold uppercase",
						children: item
					})]
				}, item))
			})
		]
	});
}
function Guide({ s }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col bg-bg px-4 py-5 sm:px-8 sm:py-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, { children: s.kicker }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl font-bold sm:text-2xl",
					children: s.title
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: s.body
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 grid min-h-0 flex-1 gap-4 lg:grid-cols-[1fr_220px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "deck-enter-left overflow-hidden rounded-lg bg-surface ring-1 ring-line",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: s.image,
						alt: s.title,
						className: "h-full w-full object-contain object-top"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "stagger hidden flex-col gap-3 lg:flex",
					children: s.observe.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-lg bg-card p-4 ring-1 ring-line",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-bold text-primary",
							children: o.n
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 font-display text-base font-semibold leading-snug",
							children: o.t
						})]
					}, o.n))
				})]
			})
		]
	});
}
function Full({ s }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col bg-bg px-4 py-5 sm:px-8 sm:py-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, { children: s.kicker }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl font-bold sm:text-2xl",
					children: s.title
				})]
			}),
			s.body ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: s.body
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "deck-enter mt-4 min-h-0 flex-1 overflow-hidden rounded-lg bg-surface ring-1 ring-line",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: s.image,
					alt: s.title,
					className: "h-full w-full object-contain object-top"
				})
			})
		]
	});
}
function Prompts({ s }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col bg-bg px-6 py-8 sm:px-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, { children: s.kicker }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "deck-enter mt-4 font-display text-3xl font-bold",
				children: s.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "stagger mt-6 grid flex-1 grid-cols-2 gap-3 lg:grid-cols-4",
				children: s.items.map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-lg bg-card p-4 ring-1 ring-line sm:p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-bold text-primary",
							children: it.n
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-3 font-display text-lg font-semibold",
							children: it.t
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: it.d
						})
					]
				}, it.n))
			})
		]
	});
}
function Flow({ s }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col bg-bg px-6 py-8 sm:px-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, { children: s.kicker }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "deck-enter mt-4 font-display text-3xl font-bold",
				children: s.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-muted",
				children: s.body
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "stagger mt-6 grid flex-1 grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3",
				children: s.items.map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-lg bg-card p-5 ring-1 ring-line",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-flex rounded-sm bg-primary px-2 py-0.5 text-xs font-bold text-fg",
							children: it.n
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-3 font-display text-lg font-semibold uppercase",
							children: it.t
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: it.d
						})
					]
				}, it.n))
			})
		]
	});
}
function Close({ s }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "h-full overflow-hidden bg-bg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: s.image,
			alt: "Bora organizar",
			className: "h-full w-full object-contain"
		})
	});
}
function SlideView({ slide, dir }) {
	switch (slide.kind) {
		case "cover": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cover, {
			s: slide,
			dir
		});
		case "journey": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Journey, { s: slide });
		case "map": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapSlide, { s: slide });
		case "guide": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Guide, { s: slide });
		case "full": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Full, { s: slide });
		case "prompts": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Prompts, { s: slide });
		case "flow": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flow, { s: slide });
		case "close": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Close, { s: slide });
	}
}
function Deck() {
	const [i, setI] = (0, import_react.useState)(0);
	const [dir, setDir] = (0, import_react.useState)(1);
	const touchX = (0, import_react.useRef)(null);
	const total = SLIDES.length;
	const slide = SLIDES[i];
	const go = (0, import_react.useCallback)((next) => {
		const clamped = Math.max(0, Math.min(total - 1, next));
		if (clamped === i) return;
		setDir(clamped > i ? 1 : -1);
		setI(clamped);
	}, [i, total]);
	(0, import_react.useEffect)(() => {
		const onKey = (e) => {
			if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
				e.preventDefault();
				go(i + 1);
			} else if (e.key === "ArrowLeft" || e.key === "PageUp") {
				e.preventDefault();
				go(i - 1);
			} else if (e.key === "Home") go(0);
			else if (e.key === "End") go(total - 1);
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [
		go,
		i,
		total
	]);
	const pct = (i + 1) / total * 100;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative flex h-dvh flex-col bg-bg text-fg",
		onTouchStart: (e) => {
			touchX.current = e.changedTouches[0]?.clientX ?? null;
		},
		onTouchEnd: (e) => {
			const start = touchX.current;
			const end = e.changedTouches[0]?.clientX;
			touchX.current = null;
			if (start == null || end == null) return;
			const d = end - start;
			if (d < -50) go(i + 1);
			if (d > 50) go(i - 1);
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-1 w-full bg-line",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "progress-fill h-full bg-primary",
					style: { width: `${pct}%` }
				}, i)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative min-h-0 flex-1",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlideView, {
					slide,
					dir
				})
			}, i),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "flex items-center justify-between gap-3 border-t border-line bg-ink px-4 py-3 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "hidden text-xs text-muted sm:block",
						children: "e-todavia · Estratégia · Tecnologia · Resultados"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted sm:hidden",
						children: "e-todavia"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								"aria-label": "Slide anterior",
								onClick: () => go(i - 1),
								disabled: i === 0,
								className: "inline-flex size-11 items-center justify-center rounded-md bg-card text-fg ring-1 ring-line disabled:opacity-30",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "min-w-16 text-center text-xs tabular-nums text-muted",
								children: [
									String(i + 1).padStart(2, "0"),
									" / ",
									String(total).padStart(2, "0")
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								"aria-label": "Próximo slide",
								onClick: () => go(i + 1),
								disabled: i === total - 1,
								className: "inline-flex size-11 items-center justify-center rounded-md bg-primary text-fg disabled:opacity-30",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								"aria-label": "Tela cheia",
								className: "hidden size-11 items-center justify-center rounded-md bg-card ring-1 ring-line sm:inline-flex",
								onClick: () => {
									const el = document.documentElement;
									if (!document.fullscreenElement) el.requestFullscreen();
									else document.exitFullscreen();
								},
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Maximize2, { className: "size-4" })
							})
						]
					})
				]
			})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Deck, {});
}
//#endregion
export { Home as component };
