import { Account, MastodonStatus, MediaAttachment } from '~/types'
import { getRandomDateInThePastYear } from './getRandomDateInThePastYear'

export function generateDummyStatus(
	content: string,
	account: Account,
	mediaAttachments: MediaAttachment[] = [],
	inReplyTo: string | null = null,
	reblog: MastodonStatus | null = null
): MastodonStatus {
	return {
		id: `${Math.random() * 9999999}`.padStart(3, '7'),
		created_at: getRandomDateInThePastYear().toISOString(),
		in_reply_to_id: inReplyTo,
		in_reply_to_account_id: null,
		sensitive: false,
		spoiler_text: '',
		visibility: 'public',
		language: 'en',
		uri: '',
		url: '',
		replies_count: 0,
		reblogs_count: 0,
		favourites_count: Math.random() * 900,
		edited_at: null,
		content,
		reblog,
		application: { name: 'Wildebeest', website: null },
		account,
		media_attachments: mediaAttachments,
		mentions: [],
		tags: [],
		emojis: [],
		card: null,
		poll: null,
	}
}
