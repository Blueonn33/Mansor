const apiBaseUrl = 'https://localhost:7286'
export const endpoints = {
    loadTaskGroups: () => `${apiBaseUrl}/api/taskGroups`,
    createTaskGroup: (userId) => `${apiBaseUrl}/api/taskGroup/create/${userId}`,
}