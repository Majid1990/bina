import { IpYpeDirective } from "../ip-ype.directive"

export interface AddMonitor {
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
    contactInfo: {
        mobileNumber: number,
        email: string
    }
    monitorType: string,
    iPAddress: IpYpeDirective
}