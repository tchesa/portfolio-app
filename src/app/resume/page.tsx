const classes = {
  sectionTitle: 'text-2xl pt-6',
  sectionList: 'flex flex-row px-6 pb-6 w-full',
  sectionListTitle: 'w-[400px] shrink-0',
  sectionListContent: 'grow pt-6',
}

const ResumePage = () => {
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
              <li>
                <div>
                  <div className="flex -ml-16">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn3rGXj6deSjZFRzgUqTYQiH6dt4oBDAew9w&usqp=CAU" className="w-[48px] h-[48px] object-cover mr-4" />
                    <div className="grow">
                      <div className="flex items-center">
                        <h3 className="grow text-lg">Frontend Developer</h3>
                        <span className="block text-sm text-neutral-400">2022 - 2023</span>
                      </div>
                      <span className="block text-sm">AtomicVest Inc - Full-time</span>
                      <span className="block text-sm text-neutral-400">United States - Remote</span>
                    </div>
                  </div>
                  <p className="mt-1 mb-2 text-sm">
                    - Maintained and improved an embedded app for investment and shares market, using React, TypeScript, and modern tools to convert Figma files into screens/components.
                    - Created a Node.js SDK based on an OpenAPI schema JSON file. The library generates all the code by the schema file using Axios and typed methods. Developed a workflow that automatically updates the version every time the schema file gets updated.
                    - Converted an old dashboard web app from Next.js to React using the most recent technologies.
                  </p>
                  <span className="block text-sm text-neutral-400">Technologies: Typescript, React, ...</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className={classes.sectionList}> {/* education section */}
          <h2 id="education" className={[classes.sectionTitle, classes.sectionListTitle].join(' ')}>Education</h2>
          <div className={classes.sectionListContent}>
            <ul className="space-y-5">
              <li>
                <div>
                  <div className="flex items-center">
                    <h3 className="grow">Bachelor of Science, Computer Science</h3>
                    <span className="block text-sm text-neutral-400">2015 - 1018</span>
                  </div>
                  <span className="block text-sm text-neutral-400">UFOP - Ouro Preto, Minas Gerais, Brazil</span>
                  <h4 className="mt-2 mb-2">Attachments</h4>
                  <ul>
                    <li>
                      <div className="flex">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn3rGXj6deSjZFRzgUqTYQiH6dt4oBDAew9w&usqp=CAU" className="w-[106px] h-[60px] border rounded object-cover mr-4" />
                        <div>
                          <h5 className="text-sm">Aperfeiçoamento automático dos conjuntos de termos utilizados pelo Yucca: um coletor temático baseado em gênero</h5>
                          <span className="block text-sm text-neutral-400">Trabalho de monografia apresentado em 2018 na Universidade Federal de Ouro Preto.</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main >
  )
}

export default ResumePage
