import { useEffect } from 'react'

export function useGoogleAnalytics(measurementId: string) {
	useEffect(() => {
		const scriptTag1 = document.createElement('script')
		scriptTag1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
		scriptTag1.async = true
		document.head.appendChild(scriptTag1)

		const scriptTag2 = document.createElement('script')
		scriptTag2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${measurementId}');
    `
		document.head.appendChild(scriptTag2)

		return () => {
			document.head.removeChild(scriptTag1)
			document.head.removeChild(scriptTag2)
		}
	}, [measurementId])
}
