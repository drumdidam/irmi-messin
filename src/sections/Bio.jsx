import React from 'react'
import Profile from '../assets/Profile.png'

const Bio = () => {
  return (
    <div
      className="bg-secondary w-screen h-screen border-amber-400 border-4 bg-cover bg-center relative"
    >
      <div className="flex items-center gap-10 bg-white/30 p-10 rounded-x1">
        <img
          src={Profile}
          alt="ProfilePic"
          className="w-40 h-40 object-cover rounded-full border-4 border-white shadow-lg"
        />
        <p className="text-lg text-white max-w-md">
          Die Querflöte begleitet mich seit meinem neunten Lebensjahr – ursprünglich, weil sie das Lieblingsinstrument meiner Mutter ist. Inzwischen ist sie ebenso aus meinem Leben nicht mehr wegzudenken.
          Seit meinem Konzertfachstudium an der Hochschule Mozarteum beschäftige ich mich intensiv mit moderner Musik und habe gelernt, sowohl technisch als auch musikalisch immer wieder neue Herausforderungen anzunehmen sowie Grenzen zu überschreiten.
          Gleichzeitig sind Engagements in verschiedenen Orchestern und Kammermusikensembles ein wichtiger Bestandteil meines künstlerischen Schaffens – von der Volksmusik über sämtliche Stilrichtungen der Klassik bis hin zur Moderne.
          Die intensive Auseinandersetzung mit meinem Instrument haben mich immer wieder ein Stück näher zu mir selbst gebracht. Die Konfrontation mit eigenen Zweifeln und das Überwinden innerer Ängste, doch allem voran die unbeschreibliche Freude und Liebe zur Musik, bedeuten für mich pure Persönlichkeitsentfaltung.
          Diese Faszination gebe ich ebenso gerne an Schüler und Studenten weiter. In den letzten Jahren habe ich zudem das Komponieren für mich entdeckt – ein weiterer Weg, meine musikalischen Ideen zum Ausdruck zu bringen.
        </p>
      </div>
    </div>
  );
};

export default Bio
