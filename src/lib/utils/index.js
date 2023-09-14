export const fetchMarkdownPosts = async () =>{
	// vite function, imports any files that match the 'glob' (regex kinda string)
	const allPostFiles = import.meta.glob('/src/routes/blog/*.md')
	const iterablePostFiles = Object.entries(allPostFiles)

	const allPosts = await Promise.all(
		// format the data to make it easy to work with
		iterablePostFiles.map(async ([path,resolver]) =>{
			const {metadata} = await resolver()
			// trim the /src/routes/ at the front of each 
			const postPath = path.slice(11,-3)

			return {
				meta:metadata,
				path:postPath,
			}
		})
	)
	return allPosts
}