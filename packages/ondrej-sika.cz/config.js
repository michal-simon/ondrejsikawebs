const site = {
    former2_url: (process.env.NODE_ENV == 'development') ? 'https://former2-ond-local.xsika.cz' : 'https://former2-idontlikedolphins.xsika.cz',
    origin: (process.env.NODE_ENV == 'development') ? 'http://127.0.0.1:3010' : process.env.SITE_ORIGIN || 'https://ondrej-sika.cz',
    name: 'ondrej-sika.cz',
    lang: 'cs',
}

export default site