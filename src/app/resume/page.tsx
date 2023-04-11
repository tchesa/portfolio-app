import { Education, Employment } from "@/types/contentful"
import { createClient } from "contentful"

const classes = {
  sectionTitle: 'text-2xl pt-6',
  sectionList: 'flex flex-row px-6 pb-6 w-full',
  sectionListTitle: 'w-[400px] shrink-0',
  sectionListContent: 'grow pt-6',
}

const ResumePage = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID || '',
    accessToken: process.env.CONTENTFUL_ACCESS_KEY || '',
  })

  const [employmentEntries, educationEntries] = await Promise.all([
    client.getEntries<Employment>({
      content_type: 'employment'
    }),
    client.getEntries<Education>({
      content_type: 'education'
    }),
  ])

  return (
    <main className="py-4 container mx-auto">
      <div className="border"> {/* resume frame */}
        <div className="p-6"> {/* profile section */}
          <h1 className="text-3xl">Cesar Antunes</h1>
          <span className="block text-sm text-neutral-400">Frontend Engineer in Belo Horizonte - Minas Gerais, Brazil</span>
        </div>
        <div className={classes.sectionList}> {/* experience section */}
          <h2 id="employment" className={[classes.sectionTitle, classes.sectionListTitle].join(' ')}>Employment</h2>
          <div className={classes.sectionListContent}>
            <ul className="space-y-5">
              {employmentEntries.items.map(employment => (
                <li key={employment.sys.id}>
                  <div>
                    <div className="flex -ml-16">
                      {employment.fields.companyLogo && (
                        <img src={employment.fields.companyLogo.fields.file.url} alt={`${employment.fields.companyName || 'Company'} logo`} className="w-[48px] h-[48px] object-cover mr-4" />
                      )}
                      <div className="grow">
                        <div className="flex items-center">
                          <h3 className="grow text-lg">{employment.fields.title || 'Untitled employment'}</h3>
                          <span className="block text-sm text-neutral-400">
                            {employment.fields.startDate ? employment.fields.startDate : null}
                            {employment.fields.startDate && employment.fields.endDate ? ' - ' : null}
                            {employment.fields.endDate ? employment.fields.endDate : null}
                          </span>
                        </div>
                        <span className="block text-sm">
                          {employment.fields.companyName ? employment.fields.companyName : null}
                          {employment.fields.companyName && employment.fields.employmentType ? ' - ' : null}
                          {employment.fields.employmentType ? employment.fields.employmentType : null}
                        </span>
                        <span className="block text-sm text-neutral-400">
                          {employment.fields.companyLocation ? employment.fields.companyLocation : null}
                          {employment.fields.companyLocation && employment.fields.locationType ? ' - ' : null}
                          {employment.fields.locationType ? employment.fields.locationType : null}
                        </span>
                      </div>
                    </div>
                    <p className="mt-1 mb-2 text-sm">
                      {employment.fields.description}
                    </p>
                    {employment.fields.technologies && employment.fields.technologies?.length > 0 && (
                      <span className="block text-sm text-neutral-400">Technologies: {employment.fields.technologies.join(', ')}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={classes.sectionList}> {/* education section */}
          <h2 id="education" className={[classes.sectionTitle, classes.sectionListTitle].join(' ')}>Education</h2>
          <div className={classes.sectionListContent}>
            <ul className="space-y-5">
              {educationEntries.items.map(education => (
                <li key={education.sys.id}>
                  <div>
                    <div className="flex items-center">
                      <h3 className="grow">
                        {education.fields.degree ? education.fields.degree : null}
                        {education.fields.degree && education.fields.fieldOfStudy ? ' - ' : null}
                        {education.fields.fieldOfStudy ? education.fields.fieldOfStudy : null}
                      </h3>
                      <span className="block text-sm text-neutral-400">
                        {education.fields.startDate ? education.fields.startDate : null}
                        {education.fields.startDate && education.fields.endDate ? ' - ' : null}
                        {education.fields.endDate ? education.fields.endDate : null}
                      </span>
                    </div>
                    <span className="block text-sm text-neutral-400">
                      {education.fields.school ? education.fields.school : null}
                      {education.fields.school && education.fields.schoolLocation ? ' - ' : null}
                      {education.fields.schoolLocation ? education.fields.schoolLocation : null}
                    </span>
                    {education.fields.attachments && education.fields.attachments.length > 0 && (
                      <>
                        <h4 className="mt-2 mb-2">Attachments</h4>
                        <ul>
                          {education.fields.attachments.map(attachment => (
                            <li key={attachment.sys.id}>
                              <div className="flex">
                                {/* {attachment.fields.thumbnail && (
                                  <img src={attachment.fields.thumbnail.fields.file.url} alt={`${attachment.fields.title || 'Company'} logo`} className="w-[106px] h-[60px] border rounded object-cover mr-4" />
                                )} */}
                                <div>
                                  {attachment.fields.title && <h5 className="text-sm">{attachment.fields.title}</h5>}
                                  {attachment.fields.description && <span className="block text-sm text-neutral-400">{attachment.fields.description}</span>}
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}

export default ResumePage