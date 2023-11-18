<?php

namespace Database\Seeders;

Use App\Models\News;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
Use Illuminate\Support\Facades\DB;

class NewsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
       for($i = 0; $i < 30; $i++){
            DB::table('news')->insert([
                'title' => fake() -> title(),
                'description' => fake() -> paragraph(),
                'category' => fake() -> sentence(),
                'author' => fake() -> email(),
            ]);
       }
    }
}
