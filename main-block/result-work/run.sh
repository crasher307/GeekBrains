homePath=`pwd`
folderFunc="$homePath/func"
folderProject="$homePath/program"

if ! [ -d $folderFunc ]; then echo -e "\033[31mERROR: Func library not found!\033[0m"
else clear & cd $folderFunc && dotnet build; fi

while true; do
	clear
	if ! [ -d $folderProject ]; then echo -e "\033[31mERROR: Project not found!\033[0m"
	else
		### RUN PROJECT #################
		echo -e "\033[32m[ --------------------- START --------------------- ]\033[0m\n"
		cd $folderProject && dotnet run
		echo -e "\n\033[31m[ ---------------------- END ---------------------- ]\033[0m"
		#################################
	fi
	read -s -n 1 -p "Press 'Q' to exit OR another key to continue ..." quit
	if ! [ -z $quit ]; then
		if [ $quit == "q" ] || [ $quit == "Q" ]; then
			clear & break
		fi
	fi
done