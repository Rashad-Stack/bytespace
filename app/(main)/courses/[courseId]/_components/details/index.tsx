import {
  Tabs,
  TabsContent,
  TabsContents,
  TabsList,
  TabsTrigger,
} from "@/components/animate-ui/components/radix/tabs"
import DETAILS from "@/data/course-details.json"
import AboutTab from "./about-tab"
import LessonsTab from "./lessons-tab"
import ReviewsTab from "./reviews-tab"

export default function Details() {
  return (
    <section>
      <div className="container py-8 sm:py-12 md:py-15.5">
        <div className="w-full max-w-180">
          <Tabs defaultValue={DETAILS.tabs[0].value}>
            <div className="overflow-x-auto pb-1">
              <TabsList>
                {DETAILS.tabs.map((tab) => (
                  <TabsTrigger key={tab.value} value={tab.value}>
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <TabsContents className="mt-6 sm:mt-10">
              <TabsContent value="about">
                <AboutTab />
              </TabsContent>
              <TabsContent value="lessons">
                <LessonsTab />
              </TabsContent>
              <TabsContent value="reviews">
                <ReviewsTab />
              </TabsContent>
            </TabsContents>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
