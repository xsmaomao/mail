const domainUtils = {
	toOssDomain(domain) {

		if (!domain) {
			return null
		}

		if (!domain.startsWith('http')) {
			return 'https://' + domain
		}

		if (domain.endsWith("/")) {
			domain = domain.slice(0, -1);
		}

		return domain
	}
}

export default  domainUtils
