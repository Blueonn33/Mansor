const apiBaseUrl = 'https://localhost:7286'
export const endpoints = {
    loadTaskGroups: () => `${apiBaseUrl}/api/taskGroups`,
    createTaskGroup: () => `${apiBaseUrl}/api/taskGroup/create`,
}