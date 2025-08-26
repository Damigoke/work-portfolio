// {/* <div className="min-h-screen bg-background">
//   {" "}
//   {/* Header */}{" "}
//   <header className="fixed top-0 w-full bg-black/80 text-white backdrop-blur-sm z-50 border-b">
//     {" "}
//     <div className="container flex h-16 items-center justify-between px-4">
//       {" "}
//       <Link href="/" className="text-xl font-bold">
//         {" "}
//         Cee's Corner{" "}
//       </Link>{" "}
//       {/* Desktop nav */}{" "}
//       <nav className="hidden md:flex gap-6">
//         {" "}
//         <Link
//           href="#about"
//           className="text-sm font-medium hover:text-primary transition-colors"
//         >
//           {" "}
//           About{" "}
//         </Link>{" "}
//         <Link
//           href="#projects"
//           className="text-sm font-medium hover:text-primary transition-colors"
//         >
//           {" "}
//           Projects{" "}
//         </Link>{" "}
//         <Link
//           href="#skills"
//           className="text-sm font-medium hover:text-primary transition-colors"
//         >
//           {" "}
//           Skills{" "}
//         </Link>{" "}
//         <Link
//           href="#contact"
//           className="text-sm font-medium hover:text-primary transition-colors"
//         >
//           {" "}
//           Contact{" "}
//         </Link>{" "}
//       </nav>{" "}
//       {/* Desktop button */}{" "}
//       <div className="hidden md:block">
//         {" "}
//         <Button variant="outline" size="sm" asChild>
//           {" "}
//           <Link href="#contact" className="text-black">
//             {" "}
//             Get in touch{" "}
//           </Link>{" "}
//         </Button>{" "}
//       </div>{" "}
//       {/* Mobile menu button */}{" "}
//       <button
//         className="md:hidden p-2"
//         onClick={() => setMenuOpen(!menuOpen)}
//         aria-label="Toggle menu"
//       >
//         {" "}
//         {menuOpen ? (
//           <X className="h-6 w-6" />
//         ) : (
//           <Menu className="h-6 w-6" />
//         )}{" "}
//       </button>{" "}
//     </div>{" "}
//     {/* Mobile menu dropdown */}{" "}
//     {menuOpen && (
//       <div className="md:hidden bg-black/90 text-white px-4 py-4 space-y-4">
//         {" "}
//         <Link
//           href="#about"
//           onClick={() => setMenuOpen(false)}
//           className="block text-sm font-medium"
//         >
//           {" "}
//           About{" "}
//         </Link>{" "}
//         <Link
//           href="#projects"
//           onClick={() => setMenuOpen(false)}
//           className="block text-sm font-medium"
//         >
//           {" "}
//           Projects{" "}
//         </Link>{" "}
//         <Link
//           href="#skills"
//           onClick={() => setMenuOpen(false)}
//           className="block text-sm font-medium"
//         >
//           {" "}
//           Skills{" "}
//         </Link>{" "}
//         <Link
//           href="#contact"
//           onClick={() => setMenuOpen(false)}
//           className="block text-sm font-medium"
//         >
//           {" "}
//           Contact{" "}
//         </Link>{" "}
//         <Button
//           variant="outline"
//           size="sm"
//           asChild
//           className="w-full text-black"
//         >
//           {" "}
//           <Link href="#contact" onClick={() => setMenuOpen(false)}>
//             {" "}
//             Get in touch{" "}
//           </Link>{" "}
//         </Button>{" "}
//       </div>
//     )}{" "}
//   </header>{" "}
//   {/* Hero Section */}{" "}
//   <section
//     className="relative w-full h-screen bg-no-repeat bg-center bg-cover"
//     style={{
//       backgroundImage: "url('/image3.jpg')",
//       backgroundPosition: "center top 40%",
//     }}
//   >
//     {" "}
//     {/* Overlay behind content */}{" "}
//     <div className="absolute inset-0 bg-black/50 z-0" /> {/* Content */}{" "}
//     <div className="relative z-10 h-full w-full flex items-center justify-center">
//       {" "}
//       <div>
//         {" "}
//         <h1 className="text-4xl md:text-4xl font-bold tracking-tight text-center mt-32 mb-16 text-white">
//           {" "}
//           <span className="block mb-6">Hi</span>{" "}
//           <span className="block mt-6">
//             {" "}
//             <Typewriter
//               words={["I'm Chioma Kalu"]}
//               loop={false}
//               cursor
//               cursorStyle="|"
//               typeSpeed={80}
//               deleteSpeed={50}
//               delaySpeed={1000}
//             />{" "}
//           </span>{" "}
//         </h1>{" "}
//         <p className="text-center text-white text-lg md:text-2xl mb-16 px-4 md:px-40">
//           {" "}
//           A Nigerian Journalist and Digital Reporter for{" "}
//           <span className="font-semibold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-red-500">
//             {" "}
//             ARISE NEWS{" "}
//           </span>{" "}
//         </p>{" "}
//         <div className="flex items-center justify-center w-full gap-4">
//           {" "}
//           <Button asChild>
//             {" "}
//             <Link href="#about">About me</Link>{" "}
//           </Button>{" "}
//           <Button variant="outline" asChild>
//             {" "}
//             <Link href="#projects">View My Work</Link>{" "}
//           </Button>{" "}
//         </div>{" "}
//       </div>{" "}
//     </div>{" "}
//   </section>{" "}
//   {/* About Section */}{" "}
//   <section id="about" className="py-20 bg-black/100">
//     {" "}
//     <div className="container text-white px-4 md:px-40">
//       {" "}
//       <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>{" "}
//       <div className="grid md:grid-cols-2 gap-12 items-center">
//         {" "}
//         <div className="aspect-square relative rounded-xl overflow-hidden">
//           {" "}
//           <img
//             src="/image.jpg"
//             alt="John Doe"
//             className="object-cover w-full h-full"
//           />{" "}
//         </div>{" "}
//         <div>
//           {" "}
//           <h3 className="text-2xl text-white font-semibold mb-4">
//             {" "}
//             Who I Am{" "}
//           </h3>{" "}
//           <p className="text-muted-foreground mb-6">
//             {" "}
//             I'm Chioma Kalu, a journalist and digital reporter working with
//             ARISE News, one of Nigeria’s leading news organizations. My work
//             spans a diverse range of topics, including politics, climate,
//             business, and global affairs.{" "}
//           </p>{" "}
//           <p className="text-muted-foreground mb-6">
//             {" "}
//             I’ve reported on key national issues such as land title revocations
//             in Abuja, political dynamics involving figures like Nyesom Wike and
//             President Bola Tinubu, as well as international developments in
//             energy policy and global security.{" "}
//           </p>{" "}
//           <p className="text-muted-foreground mb-8">
//             {" "}
//             In addition to my journalism career, I'm also a voice-over artist
//             and writer. I hold a degree from the University of Port Harcourt and
//             bring a thoughtful, creative approach to every project I undertake.{" "}
//           </p>{" "}
//           <p className="text-muted-foreground mb-8">
//             {" "}
//             Beyond my professional work, I'm active on social media, where I
//             share insights into my reporting, daily life, and connect with a
//             broader audience.{" "}
//           </p>{" "}
//           <Button asChild>
//             {" "}
//             <Link href="/resume.pdf" target="_blank">
//               {" "}
//               Download Resume{" "}
//             </Link>{" "}
//           </Button>{" "}
//         </div>{" "}
//       </div>{" "}
//     </div>{" "}
//   </section>{" "}
//   {/* Projects Section */}{" "}
//   <section id="projects" className="py-20">
//     {" "}
//     <div className="container px-4 md:px-20">
//       {" "}
//       <h2 className="text-3xl font-bold mb-12 text-center">My Projects</h2>{" "}
//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {" "}
//         <ProjectCard
//           title="ARISE News Broadcast Reporter"
//           description="As a Broadcast Reporter at ARISE News, I am responsible for researching, writing, and presenting news stories across both television and digital platforms. My reporting spans a diverse range of topics, including politics, climate, business, and international affairs. You can explore a selection of my work and news coverage here."
//           tags={[
//             "#NewsReporter",
//             "#TVJournalist",
//             "#NewsUpdate",
//             "#BreakingNews",
//           ]}
//           imageUrl="/image4.jpg"
//           demoUrl="#"
//           repoUrl="#"
//           audioUrl="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
//           readMoreUrl="https://www.arise.tv/author/chioma-kalu/"
//         />{" "}
//         <ProjectCard2
//           title="Voice-Over Artist"
//           description="Performed voice-over narration for a special Father’s Day video produced by Ambassadors World Church. The project involved delivering a warm, expressive, and engaging voice performance that complemented the visual storytelling of the video. My narration helped convey the heartfelt message of appreciation and honor for fathers within the church community, aligning with the tone and spirit of the occasion."
//           tags={["#VoiceOver", "#FreelanceVoiceOver", "#CommercialVoiceOver"]}
//           videoUrl="/video.mp4"
//         />{" "}
//       </div>{" "}
//     </div>{" "}
//   </section>{" "}
//   {/* Skills Section */}{" "}
//   <section id="skills" className="py-20 bg-muted/50">
//     {" "}
//     <div className="container px-4 md:px-20">
//       {" "}
//       <h2 className="text-3xl font-bold mb-12 text-center">My Skills</h2>{" "}
//       <div className="grid md:grid-cols-2 gap-12">
//         {" "}
//         <Card>
//           {" "}
//           <CardContent className="pt-6">
//             {" "}
//             <h3 className="text-xl font-semibold mb-6">
//               {" "}
//               Journalism & Reporting Skills{" "}
//             </h3>{" "}
//             <div className="space-y-6">
//               {" "}
//               <SkillBar skill="News Writing & Editing" percentage={90} />{" "}
//               <SkillBar skill="Breaking News Coverage" percentage={85} />{" "}
//               <SkillBar skill="Research & Fact-Checking" percentage={95} />{" "}
//               <SkillBar skill="On-Camera Reporting" percentage={90} />{" "}
//               <SkillBar skill="Digital Storytelling" percentage={80} />{" "}
//             </div>{" "}
//           </CardContent>{" "}
//         </Card>{" "}
//         <Card>
//           {" "}
//           <CardContent className="pt-6">
//             {" "}
//             <h3 className="text-xl font-semibold mb-6">
//               {" "}
//               Broadcast & Digital Media{" "}
//             </h3>{" "}
//             <div className="space-y-6">
//               {" "}
//               <SkillBar skill="Voice-over Recording" percentage={85} />{" "}
//               <SkillBar skill="Digital Storytelling" percentage={80} />{" "}
//               <SkillBar skill="Live Reporting" percentage={75} />{" "}
//               <SkillBar skill="Video Scriptwriting" percentage={70} />{" "}
//               <SkillBar skill="Content Production" percentage={65} />{" "}
//             </div>{" "}
//           </CardContent>{" "}
//         </Card>{" "}
//       </div>{" "}
//       <div className="mt-12">
//         {" "}
//         <Card>
//           {" "}
//           <CardContent className="pt-6">
//             {" "}
//             <h3 className="text-xl font-semibold mb-6">Other Skills</h3>{" "}
//             <div className="flex flex-wrap gap-2">
//               {" "}
//               {[
//                 "Critical Thinking",
//                 "Time Management",
//                 "Attention to Detail",
//                 "Strong Work Ethic",
//                 "Audience Engagement",
//                 "Collaboration & Teamwork",
//               ].map((skill) => (
//                 <div
//                   key={skill}
//                   className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
//                 >
//                   {" "}
//                   {skill}{" "}
//                 </div>
//               ))}{" "}
//             </div>{" "}
//           </CardContent>{" "}
//         </Card>{" "}
//       </div>{" "}
//     </div>{" "}
//   </section>{" "}
//   {/* Contact Section */}{" "}
//   <section id="contact" className="py-20">
//     {" "}
//     <div className="container px-6 md:px-20">
//       {" "}
//       <h2 className="text-3xl font-bold mb-12 text-center">
//         Get In Touch
//       </h2>{" "}
//       <div className="grid md:grid-cols-2 gap-12">
//         {" "}
//         <div>
//           {" "}
//           <h3 className="text-2xl font-semibold mb-4">
//             {" "}
//             Contact Information{" "}
//           </h3>{" "}
//           <p className="text-muted-foreground mb-6">
//             {" "}
//             Feel free to reach out if you're looking for a journalist, have a
//             story idea, media inquiry, or simply want to connect.{" "}
//           </p>{" "}
//           <div className="space-y-4">
//             {" "}
//             <div className="flex items-center gap-3">
//               {" "}
//               <Mail className="h-5 w-5 text-primary" />{" "}
//               <a
//                 href="mailto:ceekay730@gmail.com"
//                 className="hover:text-primary transition-colors"
//               >
//                 {" "}
//                 ceekay730@gmail.com{" "}
//               </a>{" "}
//             </div>{" "}
//             <div className="flex items-center gap-3">
//               {" "}
//               <Linkedin className="h-5 w-5 text-primary" />{" "}
//               <a
//                 href="https://www.linkedin.com/in/chioma-kalu-524355193/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:text-primary transition-colors"
//               >
//                 {" "}
//                 linkedin.com/in/chiomakalu{" "}
//               </a>{" "}
//             </div>{" "}
//             <div className="flex items-center gap-3">
//               {" "}
//               <Instagram className="h-5 w-5 text-primary" />{" "}
//               <a
//                 href="https://www.instagram.com/officialchiomakalu/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:text-primary transition-colors"
//               >
//                 {" "}
//                 IG: officialchiomakalu{" "}
//               </a>{" "}
//             </div>{" "}
//           </div>{" "}
//         </div>{" "}
//         <div>
//           {" "}
//           <form className="space-y-4">
//             {" "}
//             <div className="grid grid-cols-2 gap-4">
//               {" "}
//               <div className="space-y-2">
//                 {" "}
//                 <label htmlFor="name" className="text-sm font-medium">
//                   {" "}
//                   Name{" "}
//                 </label>{" "}
//                 <input
//                   id="name"
//                   className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
//                   placeholder="Your name"
//                 />{" "}
//               </div>{" "}
//               <div className="space-y-2">
//                 {" "}
//                 <label htmlFor="email" className="text-sm font-medium">
//                   {" "}
//                   Email{" "}
//                 </label>{" "}
//                 <input
//                   id="email"
//                   type="email"
//                   className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
//                   placeholder="Your email"
//                 />{" "}
//               </div>{" "}
//             </div>{" "}
//             <div className="space-y-2">
//               {" "}
//               <label htmlFor="subject" className="text-sm font-medium">
//                 {" "}
//                 Subject{" "}
//               </label>{" "}
//               <input
//                 id="subject"
//                 className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
//                 placeholder="Subject"
//               />{" "}
//             </div>{" "}
//             <div className="space-y-2">
//               {" "}
//               <label htmlFor="message" className="text-sm font-medium">
//                 {" "}
//                 Message{" "}
//               </label>{" "}
//               <textarea
//                 id="message"
//                 rows={5}
//                 className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
//                 placeholder="Your message"
//               />{" "}
//             </div>{" "}
//             <Button type="submit" className="w-full">
//               {" "}
//               Send Message{" "}
//             </Button>{" "}
//           </form>{" "}
//         </div>{" "}
//       </div>{" "}
//     </div>{" "}
//   </section>{" "}
//   {/* Footer */}{" "}
//   <footer className="py-8 border-t">
//     {" "}
//     <div className="container">
//       {" "}
//       <div className="flex flex-col md:flex-row justify-between items-center">
//         {" "}
//         <p className="text-muted-foreground">
//           {" "}
//           © {new Date().getFullYear()} Chioma Kalu. All rights reserved.{" "}
//         </p>{" "}
//         <div className="flex gap-4 mt-4 md:mt-0">
//           {" "}
//           <a
//             href="https://www.instagram.com/officialchiomakalu/"
//             target="_blank"
//             rel="noopener noreferrer"
//             aria-label="GitHub"
//           >
//             {" "}
//             <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />{" "}
//           </a>{" "}
//           <a
//             href="https://www.linkedin.com/in/chioma-kalu-524355193/"
//             target="_blank"
//             rel="noopener noreferrer"
//             aria-label="LinkedIn"
//           >
//             {" "}
//             <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />{" "}
//           </a>{" "}
//           <a href="mailto:ceekay730@gmail.com" aria-label="Email">
//             {" "}
//             <Mail className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />{" "}
//           </a>{" "}
//         </div>{" "}
//       </div>{" "}
//     </div>{" "}
//   </footer>{" "}
// </div>; */}
