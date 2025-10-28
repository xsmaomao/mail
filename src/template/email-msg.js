import emailUtils from '../utils/email-utils';

export default function emailMsgTemplate(email, tgMsgTo, tgMsgFrom, tgMsgText) {

	let template = `<b>${email.subject}</b>`

		if (tgMsgFrom === 'only-name') {
			template += `

发件人：${email.name}`
		}

		if (tgMsgFrom === 'show') {
			template += `

发件人：${email.name}  &lt;${email.sendEmail}&gt;`
		}

		if(tgMsgTo === 'show' && tgMsgFrom === 'hide') {
			template += `

收件人：\u200B${email.toEmail}`

		} else if(tgMsgTo === 'show') {
		template += `
收件人：\u200B${email.toEmail}`
	}

	const text = (email.text || emailUtils.htmlToText(email.content))
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;');

	if(tgMsgText === 'show') {
		template += `

${text}`
	}

	return template;

}
