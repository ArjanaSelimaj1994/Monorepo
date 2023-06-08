
export enum SKILLS {
    REACT = "React",
    HTML = "HTML",
    JS = "JS",
    TYPESCRIPT = "TypeScript"
}

export enum DOMAIN {
    WEB = "Web",
    CONNECT = "Connect",
    BACKEND = "Backend"
}

interface Interns {
    name: string
    age: number
    skills: SKILLS
}

interface Junior extends Interns {
    date_of_promotion: Date
    domain: DOMAIN

}

interface Company {
    interns: Interns
    juniors: Junior
    country: string
}

export default Company
