import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Tree, TreeNode } from "react-organizational-chart";

export default function FamilyHistorySite() {
  const [menuOpen, setMenuOpen] = useState(false);

  const photos = [
    { src: "/photos/family1.jpg", caption: "The Putti Family, 1920s" },
    { src: "/photos/family2.jpg", caption: "Family Gathering, 1950s" },
    { src: "/photos/family3.jpg", caption: "Generations Together" },
  ];

  const stories = [
    {
      title: "Our Origins",
      content:
        "The Putti family traces its roots back to the late 1800s. Originally from Italy, the family migrated across Europe before settling in various parts of the world.",
    },
    {
      title: "Family Traditions",
      content:
        "Throughout generations, the Putti family has preserved traditions of music, food, and storytelling that continue to unite us today.",
    },
    {
      title: "Modern Generations",
      content:
        "The younger generations of the family continue to honor their heritage while exploring new opportunities around the globe.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Navbar */}
      <header className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Putti Family History</h1>
          <Button variant="ghost" onClick={() => setMenuOpen(!menuOpen)}>
            <Menu />
          </Button>
        </div>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gray-100 px-4 py-2 flex flex-col space-y-2"
          >
            <a href="#photos" className="hover:text-blue-600">Photos</a>
            <a href="#stories" className="hover:text-blue-600">Stories</a>
            <a href="#family-tree" className="hover:text-blue-600">Family Tree</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </motion.nav>
        )}
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-100 to-blue-200 py-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-4"
        >
          Welcome to the Putti Family Archive
        </motion.h2>
        <p className="max-w-2xl mx-auto text-lg">
          Preserving our heritage, sharing our stories, and connecting generations.
        </p>
      </section>

      {/* Photos Section */}
      <section id="photos" className="max-w-6xl mx-auto px-4 py-16">
        <h3 className="text-3xl font-semibold mb-8 text-center">Family Photos</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {photos.map((photo, idx) => (
            <Card key={idx} className="overflow-hidden shadow-md rounded-2xl">
              <img src={photo.src} alt={photo.caption} className="w-full h-64 object-cover" />
              <CardContent className="p-4 text-center text-sm text-gray-600">
                {photo.caption}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Stories Section */}
      <section id="stories" className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-3xl font-semibold mb-8 text-center">Family Stories</h3>
          <div className="space-y-6">
            {stories.map((story, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-gray-50 shadow-sm rounded-2xl p-6"
              >
                <h4 className="text-xl font-bold mb-2">{story.title}</h4>
                <p>{story.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Family Tree Section */}
      <section id="family-tree" className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-semibold mb-8">Family Tree</h3>
          <div className="overflow-x-auto">
            <Tree
              label={<div className="p-4 bg-blue-200 rounded-2xl shadow-md">Great Grandparents</div>}
            >
              <TreeNode label={<div className="p-3 bg-green-200 rounded-xl">Grandparent A</div>}>
                <TreeNode label={<div className="p-2 bg-yellow-200 rounded-lg">Parent A1</div>}>
                  <TreeNode label={<div className="p-2 bg-pink-200 rounded-lg">Child A1a</div>} />
                  <TreeNode label={<div className="p-2 bg-pink-200 rounded-lg">Child A1b</div>} />
                </TreeNode>
                <TreeNode label={<div className="p-2 bg-yellow-200 rounded-lg">Parent A2</div>}>
                  <TreeNode label={<div className="p-2 bg-pink-200 rounded-lg">Child A2a</div>} />
                </TreeNode>
              </TreeNode>
              <TreeNode label={<div className="p-3 bg-green-200 rounded-xl">Grandparent B</div>}>
                <TreeNode label={<div className="p-2 bg-yellow-200 rounded-lg">Parent B1</div>}>
                  <TreeNode label={<div className="p-2 bg-pink-200 rounded-lg">Child B1a</div>} />
                </TreeNode>
              </TreeNode>
            </Tree>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-blue-50 py-16 text-center">
        <h3 className="text-3xl font-semibold mb-6">Contact</h3>
        <p className="max-w-xl mx-auto mb-6">
          Do you have family photos, stories, or documents to share? Get in touch
          with us to help preserve our heritage.
        </p>
        <Button className="px-6 py-3 text-lg">Send a Message</Button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-200 text-center py-6 mt-16">
        <p>© {new Date().getFullYear()} Putti Family. All rights reserved.</p>
      </footer>
    </div>
  );
}
