import React from 'react'
import Profile from '../assets/Profile.png'

const Bio = () => {
  return (
    <div
      className="flex items-center gap-15 align-middle bg-secondary w-screen h-screen border-amber-400 border-4 bg-cover bg-center relative"
    >
      <div className="w-1/3 p-5">
        <img
          src={Profile}
          alt="Profile"
        />
      </div>
      <div
        className="w-2/3">
        <p className="text-lg text-white max-w-3xl leading-relaxed">
          Die Querflöte begleitet mich seit meinem neunten Lebensjahr – ursprünglich, weil sie das Lieblingsinstrument meiner Mutter ist. Inzwischen ist sie ebenso aus meinem Leben nicht mehr wegzudenken.
          <br /><br />
          Seit meinem Konzertfachstudium an der Hochschule Mozarteum beschäftige ich mich intensiv mit moderner Musik und habe gelernt, sowohl technisch als auch musikalisch immer wieder neue Herausforderungen anzunehmen sowie Grenzen zu überschreiten.
          <br /><br />
          Gleichzeitig sind Engagements in verschiedenen Orchestern und Kammermusikensembles ein wichtiger Bestandteil meines künstlerischen Schaffens – von der Volksmusik über sämtliche Stilrichtungen der Klassik bis hin zur Moderne.
          <br /><br />
          Die intensive Auseinandersetzung mit meinem Instrument haben mich immer wieder ein Stück näher zu mir selbst gebracht. Die Konfrontation mit eigenen Zweifeln und das Überwinden innerer Ängste, doch allem voran die unbeschreibliche Freude und Liebe zur Musik, bedeuten für mich pure Persönlichkeitsentfaltung.
          <br /><br />
          Diese Faszination gebe ich ebenso gerne an Schüler und Studenten weiter. In den letzten Jahren habe ich zudem das Komponieren für mich entdeckt – ein weiterer Weg, meine musikalischen Ideen zum Ausdruck zu bringen.
        </p>
      </div>
    </div>
  );
};

export default Bio
