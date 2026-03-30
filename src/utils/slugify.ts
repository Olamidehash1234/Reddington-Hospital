// Convert branch name to URL-safe slug
export const branchNameToSlug = (name: string): string => {
    return name
        .toLowerCase()
        .replace(/[&/\\#,+()$~%.'"*?<>{}]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim()
}

// Convert slug back to find branch by name
export const slugToBranchName = (): string | null => {
    // This is used to decode, but since the slug is just a transformation,
    // we'll search by comparing slugified names instead
    return null
}
