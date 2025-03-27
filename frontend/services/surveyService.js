import { apiService } from "./apiService"

export const surveyService = {
    createSurvey: async (surveyData) => {
        try {
            const res = await apiService.post("/surveys", surveyData);
            return res.data;
        } catch (e) {
            console.log("createSurvey error:", e);
            throw new Error(e.response?.data?.message || "Failed to create survey");
        }
    },

    getAllSurveys: async () => {
        try {
            const res = await apiService.get("/surveys");
            return res.data;
        } catch (e) {
            console.log("getAllSurveys error:", e);
            throw new Error(e.response?.data?.message || "Failed to fetch surveys");
        }
    },

    getSurveyById: async (surveyId) => {
        try {
            const res = await apiService.get(`/surveys/${surveyId}`);
            return res.data;
        } catch (e) {
            console.log("getSurveyById error:", e);
            throw new Error(
                e.response?.data?.message || "Failed to fetch survey details"
            );
        }
    },

    updateSurvey: async (surveyId, updateData) => {
        try {
            const res = await apiService.put(`/surveys/${surveyId}`, updateData);
            return res.data;
        } catch (e) {
            console.log("updateSurvey error:", e);
            throw new Error(
                e.response?.data?.message || "Failed to update survey"
            );
        }
    },

    deleteSurvey: async (surveyId) => {
        try {
            const res = await apiService.delete(`/surveys/${surveyId}`);
            return res.data;
        } catch (e) {
            console.log("deleteSurvey error:", e);
            throw new Error(
                e.response?.data?.message || "Failed to delete survey"
            );
        }
    },
}