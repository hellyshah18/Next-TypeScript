//*IEducation.ts

export interface IEducation{
    sname: string,
    contactnumber:string,
    education:EduInfo[];
}
interface EduInfo{
    instituteName: string,
    startyear:number,
    endyear:number

}