from pathlib import Path
import json
path = Path('./assets/images/flags/')
# path = Path('.')
flag_paths = list(path.glob('*.png'))
# print(flag_paths)

data = {
    "countries" : []
}

for p in flag_paths:
    flag_data = {}
    flag_data['country'] = p.stem[4:].replace('-', '_')
    flag_data['path'] = './flags/' + p.name
    data['countries'].append(flag_data)

data_json = json.dumps(data)
with open('./assets/images/index.js', 'w') as file:
    file.write('const images = {\n')
    file.write('  flags: [\n')
    for i, country in enumerate(data['countries']):
        country_name = country['country']
        val = country['path']

        file.write(f"    {{id: '{i}', country: '{country_name}', img: require('{val}')}},\n")
    file.write('  ]\n} \n\n')
    file.write('export default images \n')
