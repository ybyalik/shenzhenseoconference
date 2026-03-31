'use client';

import { useState } from 'react';

/* ─── Data ─── */
const daysOverview = [
  { day: 'DAY 1', date: 'September 14', title: 'Workshops & City Tours' },
  { day: 'DAY 2', date: 'September 15', title: 'SEO Mastermind' },
  { day: 'DAY 3', date: 'September 16', title: 'Main Conference Day' },
  { day: 'DAY 4', date: 'September 17', title: 'Main Conference Day' },
  { day: 'DAY 5', date: 'September 18', title: 'VIP Networks' },
];

type ActivityType = 'Workshop' | 'Keynote' | 'Break' | 'Networking' | 'Registration';

interface Activity {
  time: string;
  type: ActivityType;
  title: string;
  speaker?: string;
  place?: string;
}

interface DaySchedule {
  day: string;
  activities: Activity[];
}

const schedule: DaySchedule[] = [
  {
    day: 'DAY 1',
    activities: [
      { time: '9:00', type: 'Registration', title: 'Registration', place: 'Place or any additional info' },
      { time: '9:30', type: 'Workshop', title: 'Name of the Activity', speaker: 'Name of the Speaker' },
      { time: '9:30', type: 'Workshop', title: 'Name of the Activity', speaker: 'Name of the Speaker' },
      { time: '9:30', type: 'Keynote', title: 'Name of the Activity', speaker: 'Name of the Speaker' },
      { time: '9:30', type: 'Keynote', title: 'Name of the Activity', speaker: 'Name of the Speaker' },
      { time: '9:30', type: 'Keynote', title: 'Name of the Activity', speaker: 'Name of the Speaker' },
    ],
  },
  {
    day: 'DAY 2',
    activities: [
      { time: '9:00', type: 'Registration', title: 'Registration', place: 'Place or any additional info' },
      { time: '9:30', type: 'Workshop', title: 'Name of the Activity', speaker: 'Name of the Speaker' },
      { time: '9:30', type: 'Keynote', title: 'Name of the Activity', speaker: 'Name of the Speaker' },
      { time: '9:30', type: 'Keynote', title: 'Name of the Activity', speaker: 'Name of the Speaker' },
      { time: '9:30', type: 'Keynote', title: 'Name of the Activity', speaker: 'Name of the Speaker' },
    ],
  },
  {
    day: 'DAY 3',
    activities: [
      { time: '9:00', type: 'Registration', title: 'Registration', place: 'Place or any additional info' },
      { time: '9:30', type: 'Workshop', title: 'Name of the Activity', speaker: 'Name of the Speaker' },
      { time: '9:30', type: 'Keynote', title: 'Name of the Activity', speaker: 'Name of the Speaker' },
      { time: '9:30', type: 'Keynote', title: 'Name of the Activity', speaker: 'Name of the Speaker' },
      { time: '9:30', type: 'Keynote', title: 'Name of the Activity', speaker: 'Name of the Speaker' },
    ],
  },
  {
    day: 'DAY 4',
    activities: [
      { time: '9:00', type: 'Registration', title: 'Registration', place: 'Place or any additional info' },
      { time: '9:30', type: 'Workshop', title: 'Name of the Activity', speaker: 'Name of the Speaker' },
      { time: '9:30', type: 'Keynote', title: 'Name of the Activity', speaker: 'Name of the Speaker' },
      { time: '9:30', type: 'Keynote', title: 'Name of the Activity', speaker: 'Name of the Speaker' },
      { time: '9:30', type: 'Keynote', title: 'Name of the Activity', speaker: 'Name of the Speaker' },
    ],
  },
  {
    day: 'DAY 5',
    activities: [
      { time: '9:00', type: 'Registration', title: 'Registration', place: 'Place or any additional info' },
      { time: '9:30', type: 'Networking', title: 'Name of the Activity', speaker: 'Name of the Speaker' },
      { time: '9:30', type: 'Networking', title: 'Name of the Activity', speaker: 'Name of the Speaker' },
    ],
  },
];

const dayFilters = ['All Days', 'Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'];
const typeFilters: ActivityType[] = ['Workshop', 'Keynote', 'Break', 'Networking'];

const typeBadgeColor: Record<ActivityType, string> = {
  Workshop: 'bg-[#4657db] text-white',
  Keynote: 'bg-[#fd6f47] text-white',
  Break: 'bg-[#f5f5f5] text-[#020725]',
  Networking: 'bg-[#020725] text-white',
  Registration: 'bg-[#f5f5f5] text-[#020725]',
};

/* ─── Hero ─── */
function AgendaHero() {
  return (
    <section className="pt-28 md:pt-36 pb-10 md:pb-16">
      <div className="max-w-[1280px] mx-auto px-5 md:px-6 lg:px-20 text-center">
        <h1 className="text-[40px] md:text-[50px] font-extrabold leading-[1.0] uppercase mb-4 md:mb-6">
          Agenda
        </h1>
        <p className="text-base md:text-lg text-[#020725] leading-[1.3] max-w-[500px] mx-auto">
          Five days of learning, networking, and collaboration with SEO leaders from around the world.
        </p>
      </div>
    </section>
  );
}

/* ─── Day Overview Cards ─── */
function DayOverviewCards() {
  return (
    <section className="pb-10 md:pb-16">
      <div className="max-w-[1280px] mx-auto px-5 md:px-6 lg:px-20">
        {/* Desktop: 5 cols. Tablet: first 3 in row, last 2 at 50%. Mobile: 2 cols */}
        <div className="hidden md:flex lg:hidden flex-col gap-4">
          {/* Row 1: Day 1 + Day 2 */}
          <div className="grid grid-cols-2 gap-4">
            {daysOverview.slice(0, 2).map((d, i) => (
              <div key={i} className="bg-[#f5f5f5] rounded-lg p-6 flex flex-col justify-between min-h-[200px]">
                <span className="text-[36px] font-extrabold text-[#4657db] leading-none uppercase">{d.day}</span>
                <div>
                  <span className="text-base font-semibold text-[#020725] block">{d.date}</span>
                  <span className="text-sm text-[#020725]/50">{d.title}</span>
                </div>
              </div>
            ))}
          </div>
          {/* Row 2: Day 3 + Day 4 */}
          <div className="grid grid-cols-2 gap-4">
            {daysOverview.slice(2, 4).map((d, i) => (
              <div key={i} className="bg-[#f5f5f5] rounded-lg p-6 flex flex-col justify-between min-h-[200px]">
                <span className="text-[36px] font-extrabold text-[#4657db] leading-none uppercase">{d.day}</span>
                <div>
                  <span className="text-base font-semibold text-[#020725] block">{d.date}</span>
                  <span className="text-sm text-[#020725]/50">{d.title}</span>
                </div>
              </div>
            ))}
          </div>
          {/* Row 3: Day 5 at 100% */}
          <div className="bg-[#f5f5f5] rounded-lg p-6 flex flex-col justify-between min-h-[200px]">
            <span className="text-[36px] font-extrabold text-[#4657db] leading-none uppercase">{daysOverview[4].day}</span>
            <div>
              <span className="text-base font-semibold text-[#020725] block">{daysOverview[4].date}</span>
              <span className="text-sm text-[#020725]/50">{daysOverview[4].title}</span>
            </div>
          </div>
        </div>
        {/* Mobile: 1 col */}
        <div className="grid md:hidden grid-cols-1 gap-4">
          {daysOverview.map((d, i) => (
            <div key={i} className="bg-[#f5f5f5] rounded-lg p-5 flex flex-col justify-between min-h-[160px]">
              <span className="text-[28px] font-extrabold text-[#4657db] leading-none uppercase">{d.day}</span>
              <div>
                <span className="text-sm font-semibold text-[#020725] block">{d.date}</span>
                <span className="text-xs text-[#020725]/50">{d.title}</span>
              </div>
            </div>
          ))}
        </div>
        {/* Desktop: 5 cols */}
        <div className="hidden lg:grid grid-cols-5 gap-5">
          {daysOverview.map((d, i) => (
            <div key={i} className="bg-[#f5f5f5] rounded-lg p-6 flex flex-col justify-between min-h-[200px]">
              <span className="text-[36px] font-extrabold text-[#4657db] leading-none uppercase">{d.day}</span>
              <div>
                <span className="text-base font-semibold text-[#020725] block">{d.date}</span>
                <span className="text-sm text-[#020725]/50">{d.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Schedule with Filters ─── */
function ScheduleSection() {
  const [activeDay, setActiveDay] = useState('All Days');
  const [activeType, setActiveType] = useState('All activities');
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filteredSchedule = schedule.filter((dayBlock) => {
    if (activeDay === 'All Days') return true;
    const dayNum = activeDay.replace('Day ', '');
    return dayBlock.day === `DAY ${dayNum}`;
  });

  const filterActivities = (activities: Activity[]) => {
    if (activeType === 'All activities') return activities;
    return activities.filter((a) => a.type === activeType);
  };

  return (
    <section className="pb-16 md:pb-24">
      <div className="max-w-[1280px] mx-auto px-5 md:px-6 lg:px-20">
        {/* Filters */}
        <div className="mb-8 md:mb-12">
          {/* Desktop filters */}
          <div className="hidden md:block">
            {/* Day filter row */}
            <div className="flex items-center gap-2 mb-3">
              {dayFilters.map((d) => (
                <button
                  key={d}
                  onClick={() => setActiveDay(d)}
                  className={`px-4 py-2 text-sm rounded transition-colors ${
                    activeDay === d
                      ? 'bg-[#4657db] text-white'
                      : 'bg-[#f5f5f5] text-[#020725] hover:bg-[#4657db] hover:text-white'
                  }`}
                >
                  {d}
                </button>
              ))}
              <button
                onClick={() => setFiltersOpen(!filtersOpen)}
                className="ml-auto flex items-center gap-2 text-sm text-[#020725]/70 hover:text-[#020725] transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                Filter
              </button>
            </div>

            {/* Type filter row */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveType('All activities')}
                className={`px-4 py-2 text-sm rounded transition-colors ${
                  activeType === 'All activities'
                    ? 'bg-[#4657db] text-white'
                    : 'bg-[#f5f5f5] text-[#020725] hover:bg-[#4657db] hover:text-white'
                }`}
              >
                All activities
              </button>
              {typeFilters.map((t) => (
                <button
                  key={t}
                  onClick={() => setActiveType(t)}
                  className={`px-4 py-2 text-sm rounded transition-colors ${
                    activeType === t
                      ? 'bg-[#4657db] text-white'
                      : 'bg-[#f5f5f5] text-[#020725] hover:bg-[#4657db] hover:text-white'
                  }`}
                >
                  {t === 'Break' ? 'Breaks' : t === 'Workshop' ? 'Workshops' : t === 'Keynote' ? 'Keynotes' : t}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile filters */}
          <div className="md:hidden">
            {/* All Days button + Filter toggle */}
            <div className="flex items-center justify-between mb-3">
              <button
                onClick={() => setFiltersOpen(!filtersOpen)}
                className="px-4 py-2.5 bg-[#f5f5f5] text-[#020725] text-sm rounded font-medium"
              >
                {activeDay}
              </button>
              <button
                onClick={() => setFiltersOpen(!filtersOpen)}
                className="flex items-center gap-2 text-sm text-[#020725]/70"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                Filter
              </button>
            </div>

            {/* Expanded filters */}
            {filtersOpen && (
              <div className="flex flex-col gap-3 mb-4">
                {/* Day filters */}
                <div className="flex flex-wrap gap-2">
                  {dayFilters.map((d) => (
                    <button
                      key={d}
                      onClick={() => setActiveDay(d)}
                      className={`px-4 py-2.5 text-sm rounded transition-colors ${
                        activeDay === d
                          ? 'bg-[#4657db] text-white'
                          : 'bg-[#f5f5f5] text-[#020725]'
                      }`}
                    >
                      {d}
                    </button>
                  ))}
                </div>

                {/* All Activities button + Filter */}
                <div className="flex items-center justify-between">
                  <button className="px-4 py-2.5 bg-[#f5f5f5] text-[#020725] text-sm rounded font-medium">
                    All Activities
                  </button>
                  <button className="flex items-center gap-2 text-sm text-[#020725]/70">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                    Filter
                  </button>
                </div>

                {/* Type filters */}
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setActiveType('All activities')}
                    className={`px-4 py-2.5 text-sm rounded transition-colors ${
                      activeType === 'All activities'
                        ? 'bg-[#4657db] text-white'
                        : 'bg-[#f5f5f5] text-[#020725]'
                    }`}
                  >
                    All activities
                  </button>
                  {typeFilters.map((t) => (
                    <button
                      key={t}
                      onClick={() => setActiveType(t)}
                      className={`px-4 py-2.5 text-sm rounded transition-colors ${
                        activeType === t
                          ? 'bg-[#4657db] text-white'
                          : 'bg-[#f5f5f5] text-[#020725]'
                      }`}
                    >
                      {t === 'Break' ? 'Breaks' : t === 'Workshop' ? 'Workshops' : t === 'Keynote' ? 'Keynotes' : t}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Schedule timeline */}
        <div className="flex flex-col gap-12 md:gap-16">
          {filteredSchedule.map((dayBlock, di) => {
            const activities = filterActivities(dayBlock.activities);
            if (activities.length === 0) return null;

            // Group activities by time
            const grouped: { time: string; items: Activity[] }[] = [];
            activities.forEach((a) => {
              const last = grouped[grouped.length - 1];
              if (last && last.time === a.time) {
                last.items.push(a);
              } else {
                grouped.push({ time: a.time, items: [a] });
              }
            });

            return (
              <div key={di}>
                {/* Day heading */}
                <h2 className="text-[28px] md:text-[40px] font-extrabold leading-[1.0] uppercase mb-6 md:mb-8">
                  {dayBlock.day}
                </h2>

                {/* Activities grouped by time */}
                <div className="flex flex-col gap-4">
                  {grouped.map((group, gi) => (
                    <div key={gi} className="flex gap-3 md:gap-4">
                      {/* Time card */}
                      <div className="w-[80px] md:w-[120px] bg-[#f5f5f5] rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-base md:text-xl font-semibold text-[#4657db]">{group.time}</span>
                      </div>

                      {/* Activity cards */}
                      <div className="flex-1 flex flex-col gap-3 md:gap-4">
                        {group.items.map((activity, ai) => (
                          <div key={ai} className="bg-[#f5f5f5] rounded-lg p-4 md:p-6 flex flex-col gap-1.5">
                            {activity.type !== 'Registration' && (
                              <span className={`text-xs px-2.5 py-1 rounded w-fit ${typeBadgeColor[activity.type]}`}>
                                {activity.type}
                              </span>
                            )}
                            <h3 className="text-base md:text-lg font-semibold text-[#020725]">{activity.title}</h3>
                            <p className="text-sm text-[#020725]/50">
                              {activity.place || activity.speaker}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─── Main Page ─── */
export default function Agenda2() {
  return (
    <div className="font-[var(--font-sora)]">
      <AgendaHero />
      <DayOverviewCards />
      <ScheduleSection />
    </div>
  );
}
