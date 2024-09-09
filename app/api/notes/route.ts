import { NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";

export async function GET(req: Request) {
  return NextResponse.json({
    degree: [
      { id: "cs3001", title: "Software Engineering" },
      { id: "cs3002", title: "Software Testing" },
      { id: "cs3003", title: "AI: Search Methods for Problem Solving" },
      { id: "cs3004", title: "Deep Learning" },
      { id: "cs3005", title: "Programming in C for DS" },
      { id: "cs3031", title: "Computer Systems Design" },
      { id: "cs4002", title: "Reinforcement Learning (RL)" },
      { id: "gn3001", title: "Scientific Programming and Graphs (SPG)" },
      { id: "ms4001", title: "Industry 4.0" },
      { id: "ms4003", title: "Financial Forensics" },
    ],
    diploma: [
      { id: "cs2001", title: "Database Management Systems (DBMS)" },
      { id: "cs2002", title: "Programming and Data Structures (PDSA)" },
      { id: "cs2003", title: "Mobile Application Development I (MAD I)" },
      { id: "cs2004", title: "Machine Learning Foundations" },
      { id: "cs2005", title: "JAVA Programming" },
      { id: "cs2006", title: "Mobile Application Development II (MAD II)" },
      { id: "cs2007", title: "Machine Learning Techniques (MLT)" },
      { id: "cs2008", title: "Machine Learning Practicum (MLP)" },
      { id: "ms2001", title: "Big Data Management (BDM)" },
      { id: "ms2002", title: "Business Analytics (BA)" },
      { id: "se2001", title: "System Commands" },
      { id: "se2002", title: "Technical Data Science (TDS)" },
    ],
  });
}
