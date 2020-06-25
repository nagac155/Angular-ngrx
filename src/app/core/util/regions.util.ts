export function createDefaultContinents() {
    return {
        asianRegions: createDefaultRegions(),
        europeanRegions: createDefaultRegions(),
    };
}

export function createDefaultRegions() {
    return {
        isLoading: false,
        error: null,
        list: [],
    };
}
