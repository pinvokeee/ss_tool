export type EditData =
{
    title: string,    
    freeText: string,
    reason: string,
}

export type MainJob = 
{
    name: string,
    subJobs: SubJob[],
}

export type SubJob = 
{
    name: string,
    tips: string,
    contents: Content[],
}

export type Content = 
{
    name: string,
    fields: Field[],
}

export type Field = 
{
    name: string,
    prefix: string,
    suffix: string,
}