RegisterNUICallback("Media:GetMedia", function(data, cb)
	Callbacks:ServerCallback("Phone:Media:GetMedia", data, function(mediaData)
		cb(mediaData)
	end)
end)

RegisterNUICallback("Media:DeleteMedia", function(data, cb)
	Callbacks:ServerCallback("Phone:Media:DeleteMedia", data, function(mediaData)
		cb(mediaData)
	end)
end)
