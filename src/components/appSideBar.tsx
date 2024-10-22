import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
} from "@/components/ui/sidebar";
import { Book, Sparkles, Layout, ChevronRight } from "lucide-react";
import { ContentName, Routes, SubContentName } from "@/constants";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "./ui/collapsible";
import Image from "next/image";
import { Separator } from "./ui/separator";
import Link from "next/link";
import React from "react";

const navItems = [
  {
    name: ContentName.Home,
    icon: <Book className="h-4 w-4" />,
    link: Routes.Home,
  },
  {
    name: ContentName.Actions,
    icon: <Sparkles className="h-4 w-4" />,
    subItems: [
      { name: SubContentName.OldFormHandling, link: Routes.OldFormHandling },
      { name: SubContentName.UseActionState, link: Routes.Actions },
      { name: SubContentName.UseOptimistic, link: Routes.UseOptimistic },
    ],
  },
  {
    name: ContentName.ReactCompiler,
    icon: <Layout className="h-4 w-4" />,
    link: Routes.ReactCompiler,
  },
  {
    name: ContentName.Next15,
    icon: (
      <div className="w-5 h-5">
        <Image
          src="/nextIcon.svg"
          alt="Next.js logo"
          width={20}
          height={20}
          className=" mt-0.5 text-white group-hover:text-black transition-colors duration-200"
        />
      </div>
    ),
    subItems: [
      {
        name: SubContentName.PerformanceImprovements,
        link: Routes.PerformanceImprovements,
      },
      {
        name: SubContentName.ServerActions,
        link: Routes.ServerActions,
      },
      {
        name: SubContentName.PartialPrerendering,
        link: Routes.PartialPrerendering,
      },
    ],
  },
];

export function AppSidebar() {
  return (
    <Sidebar variant="sidebar" collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="flex flex-row gap-2 my-4">
            <Image src="/logo_dark.svg" alt="logo" width={30} height={30} />
            <p>React 19 Workshop</p>
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.name}>
                  {item.subItems ? (
                    <Collapsible defaultOpen className="group" key={item.name}>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton asChild>
                          <div className="flex items-center justify-between cursor-pointer">
                            <div className="flex items-center group">
                              {item.icon}
                              {/* Hide text when collapsed */}
                              <span className="ml-2 hidden group-data-[state=expanded]:block">
                                {item.name}
                              </span>
                            </div>
                            <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]:rotate-90" />
                          </div>
                        </SidebarMenuButton>
                      </CollapsibleTrigger>

                      <CollapsibleContent>
                        <SidebarMenuSub className="border-l border-react-blue pl-2">
                          {item.subItems.map((subItem, index) => (
                            <React.Fragment key={subItem.name}>
                              <li>
                                <Link href={subItem.link} passHref>
                                  <SidebarMenuSubButton asChild>
                                    <span className="text-xs text-white/90">
                                      {subItem.name}
                                    </span>
                                  </SidebarMenuSubButton>
                                </Link>
                              </li>
                              {index !== item.subItems.length - 1 && (
                                <Separator />
                              )}
                            </React.Fragment>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </Collapsible>
                  ) : (
                    <Link href={item.link} passHref>
                      <SidebarMenuButton asChild>
                        <div className="flex items-center">
                          {item.icon}
                          <span className="ml-2">{item.name}</span>
                        </div>
                      </SidebarMenuButton>
                    </Link>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
