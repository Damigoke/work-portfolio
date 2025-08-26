"use client";

import { ExternalLink, Github, Square, Volume2 } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useRef, useState } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string;
  demoUrl?: string;
  repoUrl?: string;
  audioUrl?: string;
  readMoreUrl?: string;
  videoUrl?: string;
  linkLabel?: string;
}

export default function ProjectCard({
  title,
  description,
  tags,
  imageUrl,
  demoUrl,
  repoUrl,
  audioUrl,
  readMoreUrl,
  videoUrl,
  linkLabel
}: ProjectCardProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleToggleAudio = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((error) => {
          console.error("Audio failed to play:", error);
          setIsPlaying(false);
        });
    }
  };

  // Reset state when audio ends
  const handleEnded = () => {
    setIsPlaying(false);
  };
  return (
    <Card className="overflow-hidden flex flex-col h-full transition-all duration-300 hover:shadow-lg">
      <div className="aspect-video relative overflow-hidden">
        <img
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardContent className="flex-grow pt-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">
          {description}
          {readMoreUrl && (
            <Button variant="link" size="sm" asChild>
              <Link
                href={readMoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 hover:underline"
              >
                {linkLabel || "Read More"}
              </Link>
            </Button>
          )}
        </p>
      </CardContent>
      <CardFooter className="flex justify-between border-t p-4">
        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
        {/* <>
          <Button
            variant="secondary"
            size="sm"
            onClick={handleToggleAudio}
            className="flex items-center gap-2"
          >
            {isPlaying ? (
              <Square className="h-4 w-4" />
            ) : (
              <Volume2 className="h-4 w-4" />
            )}
            {isPlaying ? "Stop" : "Play Audio"}
          </Button>
          <audio
            ref={audioRef}
            src={audioUrl}
            preload="auto"
            onEnded={handleEnded}
          />
        </> */}
      </CardFooter>
    </Card>
  );
}
