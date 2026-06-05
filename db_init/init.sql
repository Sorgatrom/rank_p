--
-- PostgreSQL database dump
--

\restrict J3aNOYPffrc7qPSGCiapOw41Avf8hxF7WFRkGtlSdfpW9wAeVLDoWcej232Q69q

-- Dumped from database version 16.13
-- Dumped by pg_dump version 16.13

-- Started on 2026-06-04 19:54:48

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 228 (class 1259 OID 16524)
-- Name: cache; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cache (
    key character varying(255) NOT NULL,
    value text NOT NULL,
    expiration integer NOT NULL
);


ALTER TABLE public.cache OWNER TO postgres;

--
-- TOC entry 229 (class 1259 OID 16532)
-- Name: cache_locks; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cache_locks (
    key character varying(255) NOT NULL,
    owner character varying(255) NOT NULL,
    expiration integer NOT NULL
);


ALTER TABLE public.cache_locks OWNER TO postgres;

--
-- TOC entry 218 (class 1259 OID 16453)
-- Name: entradas; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.entradas (
    id integer NOT NULL,
    usuario_id integer,
    contenido character varying(280) NOT NULL,
    categoria character varying(50) NOT NULL,
    creado_en timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.entradas OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 16452)
-- Name: entradas_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.entradas_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.entradas_id_seq OWNER TO postgres;

--
-- TOC entry 4930 (class 0 OID 0)
-- Dependencies: 217
-- Name: entradas_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.entradas_id_seq OWNED BY public.entradas.id;


--
-- TOC entry 234 (class 1259 OID 16558)
-- Name: failed_jobs; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.failed_jobs (
    id bigint NOT NULL,
    uuid character varying(255) NOT NULL,
    connection text NOT NULL,
    queue text NOT NULL,
    payload text NOT NULL,
    exception text NOT NULL,
    failed_at timestamp(0) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public.failed_jobs OWNER TO postgres;

--
-- TOC entry 233 (class 1259 OID 16557)
-- Name: failed_jobs_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.failed_jobs_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.failed_jobs_id_seq OWNER TO postgres;

--
-- TOC entry 4931 (class 0 OID 0)
-- Dependencies: 233
-- Name: failed_jobs_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.failed_jobs_id_seq OWNED BY public.failed_jobs.id;


--
-- TOC entry 221 (class 1259 OID 16482)
-- Name: hallofhonor; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.hallofhonor (
    id integer NOT NULL,
    categoria character varying(50),
    contenido character varying(280),
    autor character varying(50),
    votos_finales integer,
    fecha_archivado timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.hallofhonor OWNER TO postgres;

--
-- TOC entry 220 (class 1259 OID 16481)
-- Name: hallofhonor_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.hallofhonor_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.hallofhonor_id_seq OWNER TO postgres;

--
-- TOC entry 4932 (class 0 OID 0)
-- Dependencies: 220
-- Name: hallofhonor_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.hallofhonor_id_seq OWNED BY public.hallofhonor.id;


--
-- TOC entry 232 (class 1259 OID 16550)
-- Name: job_batches; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.job_batches (
    id character varying(255) NOT NULL,
    name character varying(255) NOT NULL,
    total_jobs integer NOT NULL,
    pending_jobs integer NOT NULL,
    failed_jobs integer NOT NULL,
    failed_job_ids text NOT NULL,
    options text,
    cancelled_at integer,
    created_at integer NOT NULL,
    finished_at integer
);


ALTER TABLE public.job_batches OWNER TO postgres;

--
-- TOC entry 231 (class 1259 OID 16541)
-- Name: jobs; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.jobs (
    id bigint NOT NULL,
    queue character varying(255) NOT NULL,
    payload text NOT NULL,
    attempts smallint NOT NULL,
    reserved_at integer,
    available_at integer NOT NULL,
    created_at integer NOT NULL
);


ALTER TABLE public.jobs OWNER TO postgres;

--
-- TOC entry 230 (class 1259 OID 16540)
-- Name: jobs_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.jobs_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.jobs_id_seq OWNER TO postgres;

--
-- TOC entry 4933 (class 0 OID 0)
-- Dependencies: 230
-- Name: jobs_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.jobs_id_seq OWNED BY public.jobs.id;


--
-- TOC entry 219 (class 1259 OID 16465)
-- Name: likes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.likes (
    usuario_id integer NOT NULL,
    entrada_id integer NOT NULL,
    creado_en timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    id bigint NOT NULL
);


ALTER TABLE public.likes OWNER TO postgres;

--
-- TOC entry 237 (class 1259 OID 16583)
-- Name: likes_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.likes_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.likes_id_seq OWNER TO postgres;

--
-- TOC entry 4934 (class 0 OID 0)
-- Dependencies: 237
-- Name: likes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.likes_id_seq OWNED BY public.likes.id;


--
-- TOC entry 223 (class 1259 OID 16491)
-- Name: migrations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.migrations (
    id integer NOT NULL,
    migration character varying(255) NOT NULL,
    batch integer NOT NULL
);


ALTER TABLE public.migrations OWNER TO postgres;

--
-- TOC entry 222 (class 1259 OID 16490)
-- Name: migrations_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.migrations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.migrations_id_seq OWNER TO postgres;

--
-- TOC entry 4935 (class 0 OID 0)
-- Dependencies: 222
-- Name: migrations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.migrations_id_seq OWNED BY public.migrations.id;


--
-- TOC entry 226 (class 1259 OID 16508)
-- Name: password_reset_tokens; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.password_reset_tokens (
    email character varying(255) NOT NULL,
    token character varying(255) NOT NULL,
    created_at timestamp(0) without time zone
);


ALTER TABLE public.password_reset_tokens OWNER TO postgres;

--
-- TOC entry 236 (class 1259 OID 16570)
-- Name: personal_access_tokens; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.personal_access_tokens (
    id bigint NOT NULL,
    tokenable_type character varying(255) NOT NULL,
    tokenable_id bigint NOT NULL,
    name text NOT NULL,
    token character varying(64) NOT NULL,
    abilities text,
    last_used_at timestamp(0) without time zone,
    expires_at timestamp(0) without time zone,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


ALTER TABLE public.personal_access_tokens OWNER TO postgres;

--
-- TOC entry 235 (class 1259 OID 16569)
-- Name: personal_access_tokens_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.personal_access_tokens_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.personal_access_tokens_id_seq OWNER TO postgres;

--
-- TOC entry 4936 (class 0 OID 0)
-- Dependencies: 235
-- Name: personal_access_tokens_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.personal_access_tokens_id_seq OWNED BY public.personal_access_tokens.id;


--
-- TOC entry 227 (class 1259 OID 16515)
-- Name: sessions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.sessions (
    id character varying(255) NOT NULL,
    user_id bigint,
    ip_address character varying(45),
    user_agent text,
    payload text NOT NULL,
    last_activity integer NOT NULL
);


ALTER TABLE public.sessions OWNER TO postgres;

--
-- TOC entry 225 (class 1259 OID 16498)
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id bigint NOT NULL,
    name character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    email_verified_at timestamp(0) without time zone,
    password character varying(255) NOT NULL,
    remember_token character varying(100),
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


ALTER TABLE public.users OWNER TO postgres;

--
-- TOC entry 224 (class 1259 OID 16497)
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.users_id_seq OWNER TO postgres;

--
-- TOC entry 4937 (class 0 OID 0)
-- Dependencies: 224
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- TOC entry 216 (class 1259 OID 16436)
-- Name: usuarios; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.usuarios (
    id integer NOT NULL,
    username character varying(50) NOT NULL,
    email character varying(100) NOT NULL,
    password character varying(255) NOT NULL,
    bio character varying(255) DEFAULT ''::character varying,
    socialmed character varying(255) DEFAULT ''::character varying,
    creado_en timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    tokens integer DEFAULT 1,
    medallas jsonb
);


ALTER TABLE public.usuarios OWNER TO postgres;

--
-- TOC entry 215 (class 1259 OID 16435)
-- Name: usuarios_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.usuarios_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.usuarios_id_seq OWNER TO postgres;

--
-- TOC entry 4938 (class 0 OID 0)
-- Dependencies: 215
-- Name: usuarios_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.usuarios_id_seq OWNED BY public.usuarios.id;


--
-- TOC entry 4699 (class 2604 OID 16456)
-- Name: entradas id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.entradas ALTER COLUMN id SET DEFAULT nextval('public.entradas_id_seq'::regclass);


--
-- TOC entry 4708 (class 2604 OID 16561)
-- Name: failed_jobs id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.failed_jobs ALTER COLUMN id SET DEFAULT nextval('public.failed_jobs_id_seq'::regclass);


--
-- TOC entry 4703 (class 2604 OID 16485)
-- Name: hallofhonor id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.hallofhonor ALTER COLUMN id SET DEFAULT nextval('public.hallofhonor_id_seq'::regclass);


--
-- TOC entry 4707 (class 2604 OID 16544)
-- Name: jobs id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.jobs ALTER COLUMN id SET DEFAULT nextval('public.jobs_id_seq'::regclass);


--
-- TOC entry 4702 (class 2604 OID 16584)
-- Name: likes id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.likes ALTER COLUMN id SET DEFAULT nextval('public.likes_id_seq'::regclass);


--
-- TOC entry 4705 (class 2604 OID 16494)
-- Name: migrations id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.migrations ALTER COLUMN id SET DEFAULT nextval('public.migrations_id_seq'::regclass);


--
-- TOC entry 4710 (class 2604 OID 16573)
-- Name: personal_access_tokens id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.personal_access_tokens ALTER COLUMN id SET DEFAULT nextval('public.personal_access_tokens_id_seq'::regclass);


--
-- TOC entry 4706 (class 2604 OID 16501)
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- TOC entry 4694 (class 2604 OID 16439)
-- Name: usuarios id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuarios ALTER COLUMN id SET DEFAULT nextval('public.usuarios_id_seq'::regclass);


--
-- TOC entry 4915 (class 0 OID 16524)
-- Dependencies: 228
-- Data for Name: cache; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.cache (key, value, expiration) FROM stdin;
\.


--
-- TOC entry 4916 (class 0 OID 16532)
-- Dependencies: 229
-- Data for Name: cache_locks; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.cache_locks (key, owner, expiration) FROM stdin;
\.


--
-- TOC entry 4905 (class 0 OID 16453)
-- Dependencies: 218
-- Data for Name: entradas; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.entradas (id, usuario_id, contenido, categoria, creado_en) FROM stdin;
2	2	Hola Esta es mi segunda entrada!	Política	2026-06-04 13:21:36.872991
\.


--
-- TOC entry 4921 (class 0 OID 16558)
-- Dependencies: 234
-- Data for Name: failed_jobs; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.failed_jobs (id, uuid, connection, queue, payload, exception, failed_at) FROM stdin;
\.


--
-- TOC entry 4908 (class 0 OID 16482)
-- Dependencies: 221
-- Data for Name: hallofhonor; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.hallofhonor (id, categoria, contenido, autor, votos_finales, fecha_archivado) FROM stdin;
\.


--
-- TOC entry 4919 (class 0 OID 16550)
-- Dependencies: 232
-- Data for Name: job_batches; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.job_batches (id, name, total_jobs, pending_jobs, failed_jobs, failed_job_ids, options, cancelled_at, created_at, finished_at) FROM stdin;
\.


--
-- TOC entry 4918 (class 0 OID 16541)
-- Dependencies: 231
-- Data for Name: jobs; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.jobs (id, queue, payload, attempts, reserved_at, available_at, created_at) FROM stdin;
\.


--
-- TOC entry 4906 (class 0 OID 16465)
-- Dependencies: 219
-- Data for Name: likes; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.likes (usuario_id, entrada_id, creado_en, id) FROM stdin;
2	2	2026-06-04 11:23:25	8
\.


--
-- TOC entry 4910 (class 0 OID 16491)
-- Dependencies: 223
-- Data for Name: migrations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.migrations (id, migration, batch) FROM stdin;
1	0001_01_01_000000_create_users_table	1
2	0001_01_01_000001_create_cache_table	1
3	0001_01_01_000002_create_jobs_table	1
4	2026_05_20_173430_create_personal_access_tokens_table	1
\.


--
-- TOC entry 4913 (class 0 OID 16508)
-- Dependencies: 226
-- Data for Name: password_reset_tokens; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.password_reset_tokens (email, token, created_at) FROM stdin;
\.


--
-- TOC entry 4923 (class 0 OID 16570)
-- Dependencies: 236
-- Data for Name: personal_access_tokens; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.personal_access_tokens (id, tokenable_type, tokenable_id, name, token, abilities, last_used_at, expires_at, created_at, updated_at) FROM stdin;
1	App\\Models\\Usuario	2	token_de_acceso	bf48d756a8998bf095fb6de5cdb13294fcbf3290bf571deae106490e6ca44fe4	["*"]	\N	\N	2026-05-21 19:04:09	2026-05-21 19:04:09
2	App\\Models\\Usuario	2	token_de_acceso	ad69036a2f283c9d3993cbe063bbca23fe45c35c4434acb0f906506e7362f1a4	["*"]	\N	\N	2026-05-25 15:34:47	2026-05-25 15:34:47
3	App\\Models\\Usuario	2	token_de_acceso	9b9073238f7014a0f7b3c5f70029eba7d725dfb0194b6bd3cc0b9ecd43a7e7d8	["*"]	\N	\N	2026-05-27 09:33:50	2026-05-27 09:33:50
4	App\\Models\\Usuario	2	token_de_acceso	30ec336b0b085da371a42e75b6c31c45f06bd9e4b53847b17d52df7ecfafec4f	["*"]	2026-05-27 18:13:56	\N	2026-05-27 16:51:06	2026-05-27 18:13:56
13	App\\Models\\Usuario	2	token_de_acceso	10c7b73c41132ae6183e179995482d18ec39b08fd7abc6025ddd28e82e710dae	["*"]	2026-05-30 15:16:05	\N	2026-05-30 15:16:05	2026-05-30 15:16:05
14	App\\Models\\Usuario	2	token_de_acceso	26ff381e4f8e38b815c1e2a0b324a284a3408d4efb3cef630451dd152cb95b3f	["*"]	2026-05-30 15:16:15	\N	2026-05-30 15:16:15	2026-05-30 15:16:15
15	App\\Models\\Usuario	2	token_de_acceso	642c6e77f0b1af934d16ef8d7b408bf991a52c098463e21e594d7241b9d46338	["*"]	2026-05-30 15:16:26	\N	2026-05-30 15:16:25	2026-05-30 15:16:26
16	App\\Models\\Usuario	2	token_de_acceso	8d2bd2dd0e6e318a8b7612057e6106a2b1b17f9a1b7c04828b3717673eec0fb4	["*"]	2026-05-30 15:16:38	\N	2026-05-30 15:16:37	2026-05-30 15:16:38
17	App\\Models\\Usuario	2	token_de_acceso	06b9355aaf222a6cf1ca58bfe549905dc5c339485d40bead41584fb732103680	["*"]	2026-05-30 15:16:41	\N	2026-05-30 15:16:41	2026-05-30 15:16:41
5	App\\Models\\Usuario	2	token_de_acceso	5421898e67d3da7e335cd5643a2bd8b0549a68143963d96a452348ccd2f4b0e2	["*"]	2026-05-28 09:09:36	\N	2026-05-28 06:24:02	2026-05-28 09:09:36
18	App\\Models\\Usuario	2	token_de_acceso	19f4ea78c75969fe56f58c8d7f308f687353b892b2f5d1489ecafc613f3dc405	["*"]	2026-05-30 15:17:03	\N	2026-05-30 15:17:03	2026-05-30 15:17:03
19	App\\Models\\Usuario	2	token_de_acceso	64c511e7119ba120a772c16e64643d423ed4b4d319f003478cf7c7e8f56984ff	["*"]	2026-05-30 15:17:20	\N	2026-05-30 15:17:20	2026-05-30 15:17:20
20	App\\Models\\Usuario	2	token_de_acceso	cb87a04c2cf194801b5a1a7103f5b6bcc3f8463bfae6ff9e674f701e0e361d17	["*"]	2026-05-30 15:17:34	\N	2026-05-30 15:17:33	2026-05-30 15:17:34
21	App\\Models\\Usuario	2	token_de_acceso	9bc35d2d18605f32e14cbe48ba67005f9e34b73d30da6e77657e0a40ee15dd02	["*"]	2026-05-30 15:18:08	\N	2026-05-30 15:18:07	2026-05-30 15:18:08
6	App\\Models\\Usuario	2	token_de_acceso	68ac972586b2e11ea2cf02811c7921151be3c671141bf4b1a837060891f3b14d	["*"]	2026-05-28 11:17:52	\N	2026-05-28 10:39:22	2026-05-28 11:17:52
7	App\\Models\\Usuario	2	token_de_acceso	be5829e9ae4945daada1a5153ffc282823069cd74d7390b510ebd56fcacc482d	["*"]	2026-05-30 09:33:01	\N	2026-05-30 07:52:47	2026-05-30 09:33:01
8	App\\Models\\Usuario	2	token_de_acceso	bf5388e41728f6cc553533fe6d9f6ba47e8ce08fbd0289a6adf93b71af4a1b9f	["*"]	2026-05-30 15:01:00	\N	2026-05-30 15:00:59	2026-05-30 15:01:00
9	App\\Models\\Usuario	2	token_de_acceso	f0ec938c75f02ebf49c8d06fc03b1586d32ec8cb5903f80dfce3eabb99ead56d	["*"]	2026-05-30 15:14:23	\N	2026-05-30 15:14:22	2026-05-30 15:14:23
10	App\\Models\\Usuario	2	token_de_acceso	79cd4b40ff8184b77fbd539e6c6c2765ee2c5b9ab198327b0decd36896cd4ffa	["*"]	2026-05-30 15:14:31	\N	2026-05-30 15:14:30	2026-05-30 15:14:31
11	App\\Models\\Usuario	2	token_de_acceso	34778e1be8eba8338121a96e7487e5599486c222f0af3e06b7629f37bb6f1c13	["*"]	2026-05-30 15:15:50	\N	2026-05-30 15:15:49	2026-05-30 15:15:50
12	App\\Models\\Usuario	2	token_de_acceso	8031f2bc45bea8c3c1ab7f97db75874056c556dec67e885c63eafea29157eccb	["*"]	2026-05-30 15:15:54	\N	2026-05-30 15:15:54	2026-05-30 15:15:54
22	App\\Models\\Usuario	2	token_de_acceso	1ff729fb7b27e82ee79e30c479cab325e77b6df2f4a0758043c2490777c37328	["*"]	2026-05-30 15:18:31	\N	2026-05-30 15:18:31	2026-05-30 15:18:31
23	App\\Models\\Usuario	2	token_de_acceso	f5bc1abdf82e0b9366c0aa86f6c95d4518be2a4b852ac067d12341f9d3d39649	["*"]	2026-05-30 17:36:16	\N	2026-05-30 15:19:47	2026-05-30 17:36:16
37	App\\Models\\Usuario	2	token_de_acceso	cfefad807d1f967c4970d39a535259c6ed5e7568f7b208ca3881fe27c56d1457	["*"]	2026-06-02 21:46:43	\N	2026-06-02 21:46:02	2026-06-02 21:46:43
24	App\\Models\\Usuario	2	token_de_acceso	df6b9c266de017cdcd4140ab7da4d6b07f32d48a34397fd267763719832ad7e6	["*"]	2026-05-30 17:38:32	\N	2026-05-30 17:38:30	2026-05-30 17:38:32
33	App\\Models\\Usuario	2	token_de_acceso	0739db568e9d80bb27e327ea5712c2114f85a1332a4bbc88ec7248299eccdd43	["*"]	2026-06-01 08:36:06	\N	2026-06-01 08:15:47	2026-06-01 08:36:06
25	App\\Models\\Usuario	2	token_de_acceso	dcab73266583ba13bcc89ec514d776f18d84bd1b89076ba4da966eb86dd92717	["*"]	2026-05-30 17:38:40	\N	2026-05-30 17:38:38	2026-05-30 17:38:40
32	App\\Models\\Usuario	2	token_de_acceso	2ca88453761521c927e25c59c962fa634d7aa622a167e70d9c18adeb2a1d6d13	["*"]	2026-05-31 23:10:22	\N	2026-05-31 22:05:35	2026-05-31 23:10:22
28	App\\Models\\Usuario	2	token_de_acceso	dc1a3faa822e5264d5fcbc42ec96c0f0d1504ac93d650ab603eeba90978973f6	["*"]	2026-05-31 12:10:08	\N	2026-05-31 09:53:51	2026-05-31 12:10:08
26	App\\Models\\Usuario	2	token_de_acceso	3d1200981699ba6124693ddb203b2faa1fb69a0981da91bfdd5e5e7d236f95a6	["*"]	2026-05-30 18:05:45	\N	2026-05-30 17:49:52	2026-05-30 18:05:45
27	App\\Models\\Usuario	2	token_de_acceso	88361137f0bed149dd3060780e7ab08ff8bd6f7129f6fae638c85ac8388dcacd	["*"]	2026-05-31 09:53:46	\N	2026-05-31 09:23:17	2026-05-31 09:53:46
30	App\\Models\\Usuario	2	token_de_acceso	fa96c4332f5ac5a6901fe2bda86ffb5127ab88a5b8c69288bc16319dbd0b2476	["*"]	2026-05-31 17:13:15	\N	2026-05-31 16:19:24	2026-05-31 17:13:15
35	App\\Models\\Usuario	2	token_de_acceso	f4b2fab027ed83e06db00d45d06ba9b176cd568c26083b6de433f38a0bd0f85b	["*"]	2026-06-02 09:42:06	\N	2026-06-02 09:42:04	2026-06-02 09:42:06
29	App\\Models\\Usuario	2	token_de_acceso	a6dc2204a9f608dbe95e06448cbb1cbd27eef7dc35ba9ccc69142cbff2e9df7a	["*"]	2026-05-31 12:20:03	\N	2026-05-31 12:13:19	2026-05-31 12:20:03
34	App\\Models\\Usuario	2	token_de_acceso	a2532b0250389eaa064fd7de70726a363606269e7bcf779001ec18dc11bfc1c2	["*"]	2026-06-01 17:12:21	\N	2026-06-01 17:12:19	2026-06-01 17:12:21
31	App\\Models\\Usuario	2	token_de_acceso	9e7939b10b6894fd7c7e744c3ea9b7bd768863593966490bc9177af964d9d2ed	["*"]	2026-05-31 20:00:34	\N	2026-05-31 17:14:13	2026-05-31 20:00:34
36	App\\Models\\Usuario	2	token_de_acceso	5dfebc9ddb4a73976e2f46611a51095eb1ef0b9a8173a2f601f4003783f44aa0	["*"]	2026-06-02 18:42:21	\N	2026-06-02 12:40:03	2026-06-02 18:42:21
38	App\\Models\\Usuario	2	token_de_acceso	4f065eefb4d4f206a615d1ff4e33110c09f7524faf87d113cfb8fc89e2fe82be	["*"]	2026-06-03 17:58:51	\N	2026-06-03 17:57:50	2026-06-03 17:58:51
39	App\\Models\\Usuario	2	token_de_acceso	41a7fc43695e2beb27e30449f58db88b7a56a95fad8bd909e3c3982d42dc903e	["*"]	2026-06-04 11:23:31	\N	2026-06-04 11:21:18	2026-06-04 11:23:31
40	App\\Models\\Usuario	2	token_de_acceso	3c294f9557ca1c957b2155554fdc395bab795a687ebeea3291335b31aa4a9d43	["*"]	2026-06-04 16:28:19	\N	2026-06-04 11:54:56	2026-06-04 16:28:19
41	App\\Models\\Usuario	2	token_de_acceso	30c795145c7f71dcd0287b8fc2c9ae556d441ef0318c0c2041859103107c1817	["*"]	2026-06-04 16:50:10	\N	2026-06-04 16:43:29	2026-06-04 16:50:10
\.


--
-- TOC entry 4914 (class 0 OID 16515)
-- Dependencies: 227
-- Data for Name: sessions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.sessions (id, user_id, ip_address, user_agent, payload, last_activity) FROM stdin;
\.


--
-- TOC entry 4912 (class 0 OID 16498)
-- Dependencies: 225
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, name, email, email_verified_at, password, remember_token, created_at, updated_at) FROM stdin;
\.


--
-- TOC entry 4903 (class 0 OID 16436)
-- Dependencies: 216
-- Data for Name: usuarios; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.usuarios (id, username, email, password, bio, socialmed, creado_en, tokens, medallas) FROM stdin;
2	manuel	admin@admin.es	$2y$12$b4fGvca2c4MH7.YwtRGT7OUHd.aPu2yCst9Glr3e9rPHtljAFtxHW	Hola! La bio funciona ya?	http://www.google.es	2026-05-21 21:00:57.154995	0	[{"id": 1, "tipo": "oro", "categoria": "Entretenimiento"}, {"id": 2, "tipo": "oro", "categoria": "Entretenimiento"}, {"id": 3, "tipo": "plata", "categoria": "Entretenimiento"}, {"id": 4, "tipo": "bronce", "categoria": "Arte"}, {"id": 5, "tipo": "oro", "categoria": "Deportes"}, {"id": "6a206b4528627", "tipo": "oro", "categoria": "Entretenimiento"}]
\.


--
-- TOC entry 4939 (class 0 OID 0)
-- Dependencies: 217
-- Name: entradas_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.entradas_id_seq', 2, true);


--
-- TOC entry 4940 (class 0 OID 0)
-- Dependencies: 233
-- Name: failed_jobs_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.failed_jobs_id_seq', 1, false);


--
-- TOC entry 4941 (class 0 OID 0)
-- Dependencies: 220
-- Name: hallofhonor_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.hallofhonor_id_seq', 1, false);


--
-- TOC entry 4942 (class 0 OID 0)
-- Dependencies: 230
-- Name: jobs_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.jobs_id_seq', 1, false);


--
-- TOC entry 4943 (class 0 OID 0)
-- Dependencies: 237
-- Name: likes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.likes_id_seq', 8, true);


--
-- TOC entry 4944 (class 0 OID 0)
-- Dependencies: 222
-- Name: migrations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.migrations_id_seq', 4, true);


--
-- TOC entry 4945 (class 0 OID 0)
-- Dependencies: 235
-- Name: personal_access_tokens_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.personal_access_tokens_id_seq', 41, true);


--
-- TOC entry 4946 (class 0 OID 0)
-- Dependencies: 224
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 1, false);


--
-- TOC entry 4947 (class 0 OID 0)
-- Dependencies: 215
-- Name: usuarios_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.usuarios_id_seq', 2, true);


--
-- TOC entry 4740 (class 2606 OID 16538)
-- Name: cache_locks cache_locks_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cache_locks
    ADD CONSTRAINT cache_locks_pkey PRIMARY KEY (key);


--
-- TOC entry 4737 (class 2606 OID 16530)
-- Name: cache cache_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cache
    ADD CONSTRAINT cache_pkey PRIMARY KEY (key);


--
-- TOC entry 4718 (class 2606 OID 16459)
-- Name: entradas entradas_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.entradas
    ADD CONSTRAINT entradas_pkey PRIMARY KEY (id);


--
-- TOC entry 4747 (class 2606 OID 16566)
-- Name: failed_jobs failed_jobs_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.failed_jobs
    ADD CONSTRAINT failed_jobs_pkey PRIMARY KEY (id);


--
-- TOC entry 4749 (class 2606 OID 16568)
-- Name: failed_jobs failed_jobs_uuid_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.failed_jobs
    ADD CONSTRAINT failed_jobs_uuid_unique UNIQUE (uuid);


--
-- TOC entry 4722 (class 2606 OID 16488)
-- Name: hallofhonor hallofhonor_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.hallofhonor
    ADD CONSTRAINT hallofhonor_pkey PRIMARY KEY (id);


--
-- TOC entry 4745 (class 2606 OID 16556)
-- Name: job_batches job_batches_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.job_batches
    ADD CONSTRAINT job_batches_pkey PRIMARY KEY (id);


--
-- TOC entry 4742 (class 2606 OID 16548)
-- Name: jobs jobs_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.jobs
    ADD CONSTRAINT jobs_pkey PRIMARY KEY (id);


--
-- TOC entry 4720 (class 2606 OID 16590)
-- Name: likes likes_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.likes
    ADD CONSTRAINT likes_pkey PRIMARY KEY (id);


--
-- TOC entry 4724 (class 2606 OID 16496)
-- Name: migrations migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.migrations
    ADD CONSTRAINT migrations_pkey PRIMARY KEY (id);


--
-- TOC entry 4730 (class 2606 OID 16514)
-- Name: password_reset_tokens password_reset_tokens_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.password_reset_tokens
    ADD CONSTRAINT password_reset_tokens_pkey PRIMARY KEY (email);


--
-- TOC entry 4752 (class 2606 OID 16577)
-- Name: personal_access_tokens personal_access_tokens_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.personal_access_tokens
    ADD CONSTRAINT personal_access_tokens_pkey PRIMARY KEY (id);


--
-- TOC entry 4754 (class 2606 OID 16580)
-- Name: personal_access_tokens personal_access_tokens_token_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.personal_access_tokens
    ADD CONSTRAINT personal_access_tokens_token_unique UNIQUE (token);


--
-- TOC entry 4733 (class 2606 OID 16521)
-- Name: sessions sessions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_pkey PRIMARY KEY (id);


--
-- TOC entry 4726 (class 2606 OID 16507)
-- Name: users users_email_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_unique UNIQUE (email);


--
-- TOC entry 4728 (class 2606 OID 16505)
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- TOC entry 4712 (class 2606 OID 16451)
-- Name: usuarios usuarios_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_email_key UNIQUE (email);


--
-- TOC entry 4714 (class 2606 OID 16447)
-- Name: usuarios usuarios_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_pkey PRIMARY KEY (id);


--
-- TOC entry 4716 (class 2606 OID 16449)
-- Name: usuarios usuarios_username_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_username_key UNIQUE (username);


--
-- TOC entry 4735 (class 1259 OID 16531)
-- Name: cache_expiration_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX cache_expiration_index ON public.cache USING btree (expiration);


--
-- TOC entry 4738 (class 1259 OID 16539)
-- Name: cache_locks_expiration_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX cache_locks_expiration_index ON public.cache_locks USING btree (expiration);


--
-- TOC entry 4743 (class 1259 OID 16549)
-- Name: jobs_queue_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX jobs_queue_index ON public.jobs USING btree (queue);


--
-- TOC entry 4750 (class 1259 OID 16581)
-- Name: personal_access_tokens_expires_at_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX personal_access_tokens_expires_at_index ON public.personal_access_tokens USING btree (expires_at);


--
-- TOC entry 4755 (class 1259 OID 16578)
-- Name: personal_access_tokens_tokenable_type_tokenable_id_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX personal_access_tokens_tokenable_type_tokenable_id_index ON public.personal_access_tokens USING btree (tokenable_type, tokenable_id);


--
-- TOC entry 4731 (class 1259 OID 16523)
-- Name: sessions_last_activity_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX sessions_last_activity_index ON public.sessions USING btree (last_activity);


--
-- TOC entry 4734 (class 1259 OID 16522)
-- Name: sessions_user_id_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX sessions_user_id_index ON public.sessions USING btree (user_id);


--
-- TOC entry 4756 (class 2606 OID 16460)
-- Name: entradas entradas_usuario_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.entradas
    ADD CONSTRAINT entradas_usuario_id_fkey FOREIGN KEY (usuario_id) REFERENCES public.usuarios(id) ON DELETE CASCADE;


--
-- TOC entry 4757 (class 2606 OID 16476)
-- Name: likes likes_entrada_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.likes
    ADD CONSTRAINT likes_entrada_id_fkey FOREIGN KEY (entrada_id) REFERENCES public.entradas(id) ON DELETE CASCADE;


--
-- TOC entry 4758 (class 2606 OID 16471)
-- Name: likes likes_usuario_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.likes
    ADD CONSTRAINT likes_usuario_id_fkey FOREIGN KEY (usuario_id) REFERENCES public.usuarios(id) ON DELETE CASCADE;


-- Completed on 2026-06-04 19:54:48

--
-- PostgreSQL database dump complete
--

\unrestrict J3aNOYPffrc7qPSGCiapOw41Avf8hxF7WFRkGtlSdfpW9wAeVLDoWcej232Q69q

