
import { SimpleGrid } from '@mantine/core';
import { data } from '../proficienciesData';
import ProficiencyCard from './ProficiencyCard';

export default function Proficiencies () {
    return (
        <div>
            <h1>Proficiencies</h1>
            <SimpleGrid cols={3} spacing="xl">
                {data.map((proficiency) => (
                    <ProficiencyCard
                        key={proficiency.name}
                        data={proficiency}
                    />))}
            </SimpleGrid>
        </div>
    )
}
