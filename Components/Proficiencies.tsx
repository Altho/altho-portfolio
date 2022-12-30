
import { SimpleGrid } from '@mantine/core';
import { data } from '../proficienciesData';
import ProficiencyCard from './ProficiencyCard';

export default function Proficiencies () {
    return (
        <div>
            <SimpleGrid
              cols={3}
              spacing="lg"
              breakpoints={[
                { maxWidth: 980, cols: 3, spacing: 'md' },
                { maxWidth: 755, cols: 2, spacing: 'sm' },
                { maxWidth: 600, cols: 1, spacing: 'sm' },
              ]}
            >
                {data.map((proficiency) => (
                    <ProficiencyCard
                        key={proficiency.name}
                        data={proficiency}
                    />))}
            </SimpleGrid>
        </div>
    )
}
