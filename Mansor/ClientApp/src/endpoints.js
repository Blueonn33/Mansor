const apiBaseUrl = 'https://localhost:7286'
export const endpoints = {
    createTask: () => `${apiBaseUrl}/api/create`,
    loadTasks: (taskGroupId) => `${apiBaseUrl}/api/taskItems/${Number(taskGroupId)}`,
    createTaskGroup: () => `${apiBaseUrl}/api/taskGroup/create`,
    loadTaskGroups: () => `${apiBaseUrl}/api/taskGroupsList`,
}
