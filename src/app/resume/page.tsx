import MarkdownRender from "@/components/markdown-render"
import { Education, Employment, EmploymentType, LocationType } from "@/types/contentful"
import { createClient } from "contentful"
import Image from "next/image"
import SeparatorSpan from "./separator-span"
import { FiExternalLink } from 'react-icons/fi'

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

  const classes = {
    sectionTitle: 'text-2xl pt-6 font-serif font-medium',
    sectionList: 'md:flex px-10 pb-8 w-full',
    sectionListTitle: 'w-[30%] min-w-[250px] shrink-0',
    sectionListContent: 'grow pt-6',
  }

  const employmentTypeLabel: { [employmentType in EmploymentType]: string } = {
    'contract': 'Contract',
    'freelance': 'Freelance',
    'fullTime': 'Full-time',
    'internship': 'Internship',
    'partTime': 'Part-time',
    'selfEmployed': 'Self-employed'
  }

  const locationTypeLabel: { [locationType in LocationType]: string } = {
    'hybrid': 'Hybrid',
    'onSite': 'On-site',
    'remote': 'Remote'
  }

  const sortByDate = (a: Date, b: Date): number => {
    return b.getTime() - a.getTime();
  }

  const dateFormatter = new Intl.DateTimeFormat('default', {
    month: 'long',
    year: 'numeric'
  }).format

  const renderLocationType = (locationType: LocationType | undefined) => {
    if (locationType)
      return locationTypeLabel[locationType]

    return null
  }

  const renderEmploymentType = (employmentType: EmploymentType | undefined) => {
    if (employmentType)
      return employmentTypeLabel[employmentType]

    return null
  }

  const renderCompanyName = (companyName?: string, companyUrl?: string) => {
    const name = companyName || 'Untitled company';

    if (companyUrl) {
      return (
        <a className="inline-flex items-center text-neutral-400 hover:text-black" href={companyUrl} target="_blank">
          <span className="text-black">{name}</span>
          <FiExternalLink className="ml-1 " />
        </a>
      )
    }

    return <>{name}</>
  }

  return (
    <main className="py-4 container mx-auto">
      <div className="strong-border mb-20"> {/* resume frame */}
        <article>
          <div className="p-6"> {/* profile section */}
            <h1 className="text-3xl font-medium font-serif">Cesar Antunes</h1>
            <span className="block text-sm text-neutral-400">Frontend Engineer in Belo Horizonte<SeparatorSpan />Minas Gerais, Brazil</span>
          </div>
          <div className="md:flex px-8 pb-8 w-full"> {/* experience section */}
            <h2 id="employment" className="text-2xl pt-6 font-serif font-medium w-[30%] min-w-[250px] shrink-0">Employment</h2>
            <div className="grow pt-6">
              <ul className="space-y-5">
                {employmentEntries.items.sort((a, b) => sortByDate(new Date(a.fields.endDate || new Date()), new Date(b.fields.endDate || new Date()))).map(employment => (
                  <li key={employment.sys.id}>
                    <div>
                      <div className="flex items-start">
                        {employment.fields.companyLogo && (
                          // <img src={employment.fields.companyLogo.fields.file.url} alt={`${employment.fields.companyName || 'Company'} logo`} className="w-[48px] h-[48px] object-cover mr-4" />
                          <Image src={`https:${employment.fields.companyLogo.fields.file.url}`} alt={`${employment.fields.companyName || 'Company'} logo`} width={48} height={48} style={{ objectFit: 'cover' }} className="mr-4 w-auto h-auto md:-ml-16" />
                        )}
                        <div className="grow">
                          <div className="flex items-start">
                            <h3 className="grow text-lg font-serif font-medium">{employment.fields.title || 'Untitled employment'}</h3>
                            <span className="block text-sm text-neutral-400 whitespace-nowrap leading-7 ml-4">
                              {employment.fields.startDate ? dateFormatter(new Date(employment.fields.startDate)) : null}
                              {employment.fields.startDate && (employment.fields.endDate || employment.fields.currentlyWorkingHere) ? <SeparatorSpan symbol={<>&#126;</>} /> : null}
                              {employment.fields.currentlyWorkingHere
                                ? 'Current'
                                : employment.fields.endDate
                                  ? dateFormatter(new Date(employment.fields.endDate))
                                  : null
                              }
                            </span>
                          </div>
                          <span className="block text-sm">
                            {renderCompanyName(employment.fields.companyName, employment.fields.companyUrl)}
                            {employment.fields.employmentType ? <SeparatorSpan /> : null}
                            {renderEmploymentType(employment.fields.employmentType)}
                          </span>
                        </div>
                      </div>
                      <span className="block mt-1 text-sm text-neutral-400">
                        {employment.fields.companyLocation ? employment.fields.companyLocation : null}
                        {employment.fields.companyLocation && employment.fields.locationType ? <SeparatorSpan /> : null}
                        {renderLocationType(employment.fields.locationType)}
                      </span>
                      {employment.fields.description && (
                        <MarkdownRender className="pt-1 mb-2 text-sm" content={employment.fields.description} />
                      )}
                      {employment.fields.technologies && employment.fields.technologies?.length > 0 && (
                        <span className="block text-sm text-neutral-400">Technologies: {employment.fields.technologies.join(', ')}</span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="md:flex px-10 pb-8 w-full"> {/* education section */}
            <h2 id="education" className="text-2xl pt-6 font-serif font-medium w-[30%] min-w-[250px] shrink-0">Education</h2>
            <div className="grow pt-6">
              <ul className="space-y-5">
                {educationEntries.items.map(education => (
                  <li key={education.sys.id}>
                    <div>
                      <div className="flex items-start">
                        {education.fields.schoolThumbnail && (
                          <Image src={`https:${education.fields.schoolThumbnail.fields.file.url}`} alt={`${education.fields.school || 'School'} logo`} width={48} height={48} style={{ objectFit: 'cover' }} className="mr-4 w-auto h-auto md:-ml-16" />
                        )}
                        <div className="grow">
                          <div className="flex items-start">
                            <h3 className="grow text-lg font-serif font-medium">
                              {education.fields.degree ? education.fields.degree : null}
                              {education.fields.degree && education.fields.fieldOfStudy ? <SeparatorSpan /> : null}
                              {education.fields.fieldOfStudy ? education.fields.fieldOfStudy : null}
                            </h3>
                            <span className="block text-sm text-neutral-400 whitespace-nowrap leading-7 ml-4">
                              {education.fields.startDate ? dateFormatter(new Date(education.fields.startDate)) : null}
                              {education.fields.startDate && education.fields.endDate ? <SeparatorSpan symbol={<>&#126;</>} /> : null}
                              {education.fields.endDate ? dateFormatter(new Date(education.fields.endDate)) : null}
                            </span>
                          </div>
                          <span className="block text-sm text-neutral-400">
                            {education.fields.school ? education.fields.school : null}
                            {education.fields.school && education.fields.schoolLocation ? <SeparatorSpan /> : null}
                            {education.fields.schoolLocation ? education.fields.schoolLocation : null}
                          </span>
                        </div>
                      </div>
                      {education.fields.attachments && education.fields.attachments.length > 0 && (
                        <>
                          <h4 className="mt-2 mb-2">Attachments:</h4>
                          <ul className="space-y-4">
                            {education.fields.attachments.map(attachment => {
                              const renderContent = () => (
                                <div className="flex">
                                  {attachment.fields.thumbnail && (
                                    <Image src={`https:${attachment.fields.thumbnail.fields.file.url}`} alt={`${attachment.fields.title || 'Attachment'} logo`} width={106} height={60} style={{ objectFit: 'cover' }} className="mr-4 w-[106px] h-[60px] border rounded object-cover" />
                                  )}
                                  <div>
                                    {attachment.fields.title && (
                                      <h5 className="text-sm inline-flex items-center">
                                        <span className="text-black">{attachment.fields.title}</span>
                                        {attachment.fields.link && <FiExternalLink className="ml-1" />}
                                      </h5>
                                    )}
                                    {attachment.fields.description && <span className="block text-sm text-neutral-400">{attachment.fields.description}</span>}
                                  </div>
                                </div>
                              )

                              return (
                                <li key={attachment.sys.id}>
                                  {attachment.fields.link ? (
                                    <a className="text-neutral-400 hover:text-black" href={attachment.fields.link} target="_blank">
                                      {renderContent()}
                                    </a>
                                  ) : renderContent()}
                                </li>
                              )
                            })}
                          </ul>
                        </>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      </div>
    </main>
  )
}

export default ResumePage
