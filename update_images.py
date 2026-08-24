import re

with open("petData.ts", "r", encoding="utf-8") as f:
    lines = f.readlines()

updates = {
    "grooming-kit": "/images/grooming_kit.png",
    "interactive-toys-set": "/images/interactive_toys.png",
    "ceramic-bowl-duo": "/images/ceramic_bowl.png",
    "travel-water-bottle": "/images/water_bottle.png",
    "squeaky-bone-toy": "/images/squeaky_bone.png",
    "beef-dog-food": "/images/dog_food.png",
    "slow-feeder-bowl": "/images/slow_feeder.png",
    "cat-grooming-brush": "/images/self_cleaning_brush.png",
    "feather-teaser": "/images/feather_teaser.png"
}

current_id = None
for i, line in enumerate(lines):
    match_id = re.search(r"id:\s*'([^']+)'", line)
    if match_id:
        current_id = match_id.group(1)
        
    if current_id in updates:
        if "img:" in line and "http" in line:
            lines[i] = re.sub(r"img:\s*'.*?'", f"img: '{updates[current_id]}'", line)
        if "gallery:" in line and "px(" in line:
            lines[i] = re.sub(r"gallery:\s*\[.*?\]", f"gallery: ['{updates[current_id]}', '{updates[current_id]}']", line)

with open("petData.ts", "w", encoding="utf-8") as f:
    f.writelines(lines)

print("Updates completed successfully.")
