<script setup>
import { Laptop, Moon, Sun } from 'lucide-vue-next'

const colorMode = useColorMode()
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="ghost">
        <Sun
          class="absolute w-5 h-5 transition-all scale-100 dark:scale-0"
        />
        <Moon
          class="w-5 h-5 transition-all scale-0 dark:scale-100"
        />
        <span class="sr-only">切换主题</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent
      align="end"
      class="min-w-min"
    >
      <DropdownMenuItem
        class="cursor-pointer"
        @click="colorMode.preference = 'light'"
      >
        <Sun class="w-4 h-4 mr-1" />
        浅色
      </DropdownMenuItem>
      <DropdownMenuItem
        class="cursor-pointer"
        @click="colorMode.preference = 'dark'"
      >
        <Moon class="w-4 h-4 mr-1" />
        深色
      </DropdownMenuItem>
      <DropdownMenuItem
        class="cursor-pointer"
        @click="colorMode.preference = 'system'"
      >
        <Laptop class="w-4 h-4 mr-1" />
        系统
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
