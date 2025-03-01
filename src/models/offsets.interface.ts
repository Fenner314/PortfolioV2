import { UrlOption } from 'models/url.model'
export interface Offsets<T = number> {
	[UrlOption.About]?: T
	[UrlOption.FunFacts]?: T
	[UrlOption.Experience]?: T
	[UrlOption.Projects]?: T
	[UrlOption.Education]?: T
	[UrlOption.Media]?: T
	[UrlOption.Contact]?: T
}
