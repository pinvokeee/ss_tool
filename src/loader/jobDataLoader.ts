import { Content, Field, MainJob, SubJob } from "../types";

export const jobDataLoader = () =>
{
    const createMainJob = (mjob: any) : MainJob =>
    {
        return {
            name: mjob.name ? mjob.name : "",
            subJobs: mjob.subJobs != undefined ? mjob.subJobs.map((s: any) => createSubJob(s)) : [],
        }
    }

    const createSubJob = (sjob: any) : SubJob =>
    {
        return {
            name: sjob.name ? sjob.name : "",
            tips: sjob.tips ? sjob.tips : "",
            contents: sjob.info ? sjob.info.map((s: any) => createContent(s)) : [],
        }
    }

    const createContent = (content: any) : Content =>
    {
        return {
            name: content.name ? content.name : "",
            fields: content.items ? content.items.map((s: any) => createField(s)) : [],
        }
    }

    const createField = (field: any) : Field =>
    {
        return {
            name: field.name ? field.name : "",
            prefix: field.prefix ? field.prefix : "",
            suffix: field.suffix ? field.suffix : "",
        }
    }

    /* @ts-ignore */
    const jd = jobData;
    const job = jd.jobs.map((mjob: any) : MainJob => createMainJob(mjob));

    console.log(job);
}