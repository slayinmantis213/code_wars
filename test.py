import random
def pet():
    options = []
    for i in range (3):
        gen = random.randrange(1,201)
        if gen > 149:
            sel = random.randrange(0,2)
            print(sel)
            if sel == 0:
                options.append('glorb')
            else:
                options.append('snek')
        elif gen > 109:
            options.append('green')
        elif gen > 79:
            options.append('siren')
        elif gen > 54:
            options.append('red')
        elif gen > 34:
            sel = random.randrange(0,2)
            print(sel)
            if sel == 0:
                options.append('moogle')
            else:
                options.append('griffin')
        elif gen > 19:
            options.append('kraken')
        elif gen > 9:
            options.append('hydra')
        elif gen > 4:
            options.append('mythic-grif')
        elif gen >= 2:
            options.append('tart-cat')
        elif gen == 1:
            options.append('celestial')
    return options

print(pet())