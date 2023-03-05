const apiBaseUrl = 'https://localhost:7286'
export const endpoints = {
    loadTaskGroups: () => `${apiBaseUrl}/api/taskGroups`,
    getTaskGroupName: (taskGroupId) => `${apiBaseUrl}/api/taskGroup/${taskGroupId}`,
    createTaskGroup: () => `${apiBaseUrl}/api/create/taskGroup`,
    //loadTaskItems: () => `${apiBaseUrl}/api/taskItems`,
    loadTaskItems: (taskGroupId) => `${apiBaseUrl}/api/taskItems/${taskGroupId}`,
    createTaskItem: () => `${apiBaseUrl}/api/create/taskItem`,
    loadNotes: () => `${apiBaseUrl}/api/notes`,
    createNote: () => `${apiBaseUrl}/api/create/note`,
}