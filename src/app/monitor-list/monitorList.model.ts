export interface MonitorInfo {
    id: string,
    contactInfo: {
        mobileNumber: number,
        email: string
    }
    generalInfo: {
        monitorName: string,
        createdBy: string,
        createdDate: Date,
    }
    monitoringFrequency: {
        frequency: number,
        monitorInNight: boolean
    }
    website: {
        webiteUrl: string,
        warningResponse: number,
        critical: number
    }
    monitorType: string,
}