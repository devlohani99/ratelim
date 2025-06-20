import { create } from 'zustand';

const useProjectStore = create((set) => ({
  projectId: '',
  apiKey: '',
  setProject: ({ projectId, apiKey }) => set({ projectId, apiKey }),
  clearProject: () => set({ projectId: '', apiKey: '' }),
}));

export default useProjectStore; 